import React, { useState, useContext, useEffect } from 'react';
import './Select.scss';
import { ItemsContext } from '../../../provider/ItemsProvider';
import { SET, UNDO, REDO, CANCEL } from '../../../provider/actionTypes';

const Select = ({ id, name, value, values }) => {
    const [selectValue, setSelectValue] = useState(value);
    const [state, dispatch] = useContext(ItemsContext);
    //const prevValue = usePrevious(fieldValue);
    const onChange = (e) => {
        setSelectValue(e.target.value);
        dispatch({
            type: SET,
            payload: { id, value: e.target.value }
        });
    }
    useEffect(() => {
        const action = state.isUndoClicked ? UNDO : state.isRedoClicked ? REDO :
            state.isCancelClicked ? CANCEL : null
        if (action !== null) {
            setSelectValue(value)
            dispatch({
                type: action,
                payload: false
            });
        }
    }, [state.isUndoClicked, state.isRedoClicked, state.isCancelClicked])
    return (
        <React.Fragment>
            <label> {name} </label>
            <select value={selectValue}
                name={name}
                onChange={onChange}>
                {
                    values.map((val, i) => {
                        return (<option key={i}
                            value={val}>
                            {val}
                        </option>)
                    })
                }
            </select>
        </React.Fragment>
    );
}

export default Select;