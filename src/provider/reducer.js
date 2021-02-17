import initialState from './initialState';
import { GET_FIELDS, SET, UNDO, REDO, SAVE, CANCEL} from './actionTypes';

// Updated the fields in items
const saveFields = (newState) => {
    const { items, fields, currentItemId } = newState;
    let itemToUpdate;
    items.filter(item => {
        if (item.id === currentItemId) {
            itemToUpdate = item
        }
    });
    itemToUpdate.fields = JSON.parse(JSON.stringify(fields));
    // TODO: call the API to save the item
}
const reducer = (state, action) => {
    const { items } = state;
    let filtered;
    switch (action.type) {
        case GET_FIELDS:
            // get the fields for the item seleted
            items.filter(item => {
                if (item.id === action.payload){
                    filtered = item.fields
                }
            });
            // copy by value, not reference
            const newFields = JSON.parse(JSON.stringify(filtered));
            return { ...state, fields: newFields, currentItemId: action.payload };    
        case UNDO:
            if (state.history.length < 1) return state;
            return { ...state, isUndoClicked: action.payload }
        case REDO:
            if (state.history.length < 1) return state;
            return { ...state, isRedoClicked: action.payload }
        case SET:
            const newState = {...state}; 
            // copy by value, not reference
            newState.history.push(JSON.parse(JSON.stringify(newState.fields)));
            // update the values 
            newState.fields.find(field => field.id == action.payload.id).fieldValue = action.payload.value;
            return newState;
        case SAVE:
            const res = saveFields(state)
            return {
                ...state, fields: state.fields,
                success: res
            }
        case CANCEL:
            const id = state.currentItemId;
            // get the fields for the current item to reset
            items.filter(item => {
                if (item.id === id){
                    filtered = item.fields
                }
            });
            // copy by value, not reference
            const fields = JSON.parse(JSON.stringify(filtered));
            // reset undo/redo history
            state.history = [];
            return { ...state, fields, currentItemId: id, isCancelClicked: action.payload};
      }
};

export default reducer;