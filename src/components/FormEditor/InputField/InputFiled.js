import React, { useContext, useState, useEffect, useRef } from 'react';
import './InputField.scss';
import { ItemsContext } from '../../../provider/ItemsProvider';
import { SET, UNDO, REDO, CANCEL } from '../../../provider/actionTypes';


const InputField = ({ name, id, placeholder, type, value }) => {
    const [fieldValue, setFieldValue] = useState(value);
    const [state, dispatch] = useContext(ItemsContext);
    
    // Handle text change, save in history for undo/redo
    const onChangeText = (e) => {
        setFieldValue(e.target.value);
        dispatch({
            type: SET,
            payload: { id, value: e.target.value }
        });
    }

     // Handle toggle change, save in history for undo/redo
    const onClickToggle = (e) => {
        setFieldValue(e.target.checked);   
        dispatch({
            type: SET,
            payload: { id, value: e.target.checked }
        });
    }
    
    // Update input values & disptach action based on button click
    useEffect(() => {
        const action = state.isUndoClicked ? UNDO : state.isRedoClicked ? REDO :
            state.isCancelClicked ? CANCEL: null
        if (action !== null) {
            setFieldValue(value)
            dispatch({
                type: action,
                payload: false
            });  
        }
    }, [state.isUndoClicked, state.isRedoClicked, state.isCancelClicked])

    return (
        <React.Fragment>
            <label>{name}
                {
                    (type === 'toggle') ?
                        <input type='checkbox'
                            checked={fieldValue}
                            onChange={onClickToggle}
                            id={id}
                            name={name}
                        /> :
                        <input type='text'
                            value={fieldValue}
                            onChange={onChangeText}
                            placeholder={placeholder}
                            id={id}
                            name={name} />
                }
            </label>
        </React.Fragment>
    );
}


export default InputField;