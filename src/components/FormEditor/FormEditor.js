import React, { useContext } from 'react';
import InputField from './InputField/InputFiled';
import Select from './Select/Select';
import { ItemsContext } from '../../provider/ItemsProvider';
import './FormEditor.scss';

const FormEditor = ({ }) => {
    const [state] = useContext(ItemsContext);

    let undoHistoryLength = state.history.length > 1 ? state.history.length - 2 : state.history.length;
    let redoHistoryLength = state.history.length > 1 ? state.history.length - 1 : state.history.length;
    let fields = state && state.isUndoClicked ? state.history[undoHistoryLength] : state && state.isRedoClicked ?
        state.history[redoHistoryLength] : state.fields && state.fields;
    fields = fields || [];
    return (
        <React.Fragment>
            {
            fields.length > 1 ? 
            (<form className="items-editor">
                {
                    fields.map((field) => {
                        const val = field.fieldType === 'option' ?
                            (<div key={field.id}
                                className="field">
                                <Select
                                    key={field.id}
                                    id={field.id}
                                    type={field.fieldType}
                                    name={field.fieldName}
                                    value={field.fieldValue}
                                    values={field.values} />
                            </div>) :

                            (<div
                                key={field.id}
                                className="field">
                                <InputField
                                    key={field.id}
                                    id={field.id}
                                    type={field.fieldType}
                                    name={field.fieldName}
                                    value={field.fieldValue}
                                /></div>);
                        return val;
                    })
                }
            </form>) :
            (<h4 className="msg">Please select an item on the left to view/edit fields</h4>)
            }   
        </React.Fragment>
    );

}

export default FormEditor;