const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

let initialState = {
    dialogsData: [
        {id:'1', name: 'Misha'},
        {id:'2', name: 'Sasha'},
        {id:'3', name: 'Maria'},
        {id:'4', name: 'Yuna'},
    ],
    messagesData: [
        {id:'1', message: 'Hi'},
        {id:'2', message: 'Hello'},
        {id:'3', message: 'How was your day'},
        {id:'4', message: 'Ok bye'},
    ],
    newMessageText: 'hi'
}


const DialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messagesData: [...state.messagesData, {id: '6', message: state.newMessageText}],
                newMessageText: ''
            }
        }
        case UPDATE_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newMessage
            }
        }
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageTextActionCreator = (text) => {
    return({type: UPDATE_MESSAGE_TEXT, newMessage: text})
}

export default DialogsReducer
