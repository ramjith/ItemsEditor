import React, { useContext } from 'react';

import './ItemsList.scss';
import { ItemsContext } from '../../provider/ItemsProvider';
import { GET_FIELDS } from '../../provider/actionTypes';

const ItemsList = ({ }) => {
    const [state, dispatch] = useContext(ItemsContext);
    const onClickHandler = (e) => {
        const id = e.target.dataset.id;
        dispatch({
            type: GET_FIELDS,
            payload: id
        });
    }

    return (
        <React.Fragment>
            <ul>
                {
                    state && state.items && state.items.map((item) => {
                        return (<li key={item.id}
                            className={state.currentItemId === item.id ? 'selected' : ''}
                            data-id={item.id}
                            onClick={onClickHandler}>
                            {item.name}
                        </li>);
                    })
                }
            </ul>
        </React.Fragment>
    );
}

export default ItemsList;