import React, { useContext } from 'react';
import { ItemsContext } from '../../provider/ItemsProvider';
import './Header.scss';
import { UNDO, REDO, SAVE, CANCEL } from '../../provider/actionTypes';


const Header = ({ }) => {
    const [state, dispatch] = useContext(ItemsContext);

    // Disptach action when the button is clicked
    const handleClick = (action) => {
        dispatch({
            type: action,
            payload: true
        });
    }

    return (
        <React.Fragment>
            <div className="header-container">
                <span className="flex-items"><h3>Items Editor</h3></span>
                <div className="flex-items toolbar">
                    <span>
                        <button
                            className="undo-btn"
                            onClick={() => handleClick(UNDO)}>
                            Undo
                            </button>
                    </span>
                    <span>
                        <button
                            className="redo-btn"
                            onClick={() => handleClick(REDO)}>
                            Redo
                            </button>
                    </span>
                    <span>
                        <button
                            className="save-btn"
                            onClick={() => handleClick(SAVE)}>
                            Save
                            </button>
                    </span>
                    <span>
                        <button
                            className="cancel-btn"
                            onClick={() => handleClick(CANCEL)}>
                            Cancel
                            </button>
                    </span>
                </div>
            </div>
        </React.Fragment>
    );
}



export default Header;