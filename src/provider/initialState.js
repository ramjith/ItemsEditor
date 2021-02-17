
const initialState = {
    history: [],
    // Array of previous state values updated each time we push a new state
    isUndoClicked: false,
    isRedoClicked: false,
    isSaveClicked: false,
    isCancelClicked: false,
    currentItemId: '',
    items: [{
        id: '2',
        name: 'Profile',
        fields: [
            {
                id: '100',
                fieldName: 'First Name',
                fieldType: 'text',
                fieldValue: ''
            },
            {
                id: '101',
                fieldName: 'Last Name',
                fieldType: 'text',
                fieldValue: ''
            },
            {
                id: '102',
                fieldName: 'Address',
                fieldType: 'text',
                fieldValue: ''
            },
            {
                id: "103",
                fieldName: 'State',
                fieldType: 'option',
                fieldValue: '',
                values: ['Alabama', 'Alaska', 'Arkansas', 'California']
            },
            {
                id: '104',
                fieldName: 'Phone Number',
                fieldType: 'text',
                fieldValue: ''
            }
        ]
    },
    {
        id: '1',
        name: 'Notification',
        fields: [{
            id: '10',
            fieldName: 'Email Id',
            fieldType: 'text',
            fieldValue: ''
        },
        {
            id: '11',
            fieldName: 'Mobile Phone',
            fieldType: 'text',
            fieldValue: ''
        },
        {
            id: "12",
            fieldName: 'Notification Type',
            fieldType: 'option',
            fieldValue: '',
            values: ['Account', 'Transcation', 'Balance']
        },
        {
            id: "13",
            fieldGroup: 'Preferred Type',
            fieldName: 'Phone',
            fieldType: 'toggle',
            fieldValue: false
        },
        {
            id: "14",
            fieldGroup: 'Preferred Type',
            fieldName: 'Email',
            fieldType: 'toggle',
            fieldValue: false
        }
        ]
    }],
    error: null,
    success: null
};

export default initialState;