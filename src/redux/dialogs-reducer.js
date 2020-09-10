const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

const DialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: '6',
                message: state.newMessageText
            }
            state.messageData.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newMessage
            return state
        default: return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageTextActionCreator = (text) => {
    return({type: UPDATE_MESSAGE_TEXT, newMessage: text})
}

export default DialogsReducer
