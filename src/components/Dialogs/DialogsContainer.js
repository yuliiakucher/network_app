import React from "react";
// import NewMessage from "./Message/NewMessage/NewMessage";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import MyContext from "../../MyContext";


const DialogsContainer = () => {

    return (
            <MyContext.Consumer>
                {(store) => {
                    let state = store.getState().DialogsPage

                    const updateMessageText = (body) => {
                        store.dispatch(updateMessageTextActionCreator(body))
                    }

                    const addMessage = () => {
                        store.dispatch(addMessageActionCreator())
                    }
                        return(
                            <Dialogs
                                addMessage={addMessage}
                                updateMessageText={updateMessageText}
                                dialogsData={state.dialogsData}
                                messagesData={state.messagesData}
                                newMessageText={state.newMessageText}
                            />
                        )
                    }
                }
            </MyContext.Consumer>
        )



}

export default DialogsContainer
