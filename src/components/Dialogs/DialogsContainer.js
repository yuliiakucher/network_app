import React from "react";
// import NewMessage from "./Message/NewMessage/NewMessage";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().DialogsPage

    const updateMessageText = (body) => {
        props.dispatch(updateMessageTextActionCreator(body))
    }

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }
    return <Dialogs
        addMessage={addMessage}
        updateMessageText={updateMessageText}
        dialogsData={state.dialogsData}
        messagesData={state.messagesData}
        newMessageText={state.newMessageText}
    />
}

export default DialogsContainer
