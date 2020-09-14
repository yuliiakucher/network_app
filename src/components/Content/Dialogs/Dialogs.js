import React from "react";
import dialogs from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
// import NewMessage from "./Message/NewMessage/NewMessage";
import new_message from "./Message/NewMessage/NewMessage.module.css";

const Dialogs = (props) => {

    const DialogItem = props.dialogsData.map(dialog => <Dialog name={dialog.name} key={dialog.id} id={dialog.id}/>)
    const MessageItem = props.messagesData.map(message => <Message message={message.message} key={message.id}/>)

    // const DialogItem = props.dialogsData.dialogData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)
    // const MessageItem = props.dialogsData.messageData.map(message => <Message message={message.message} id={message.id}/>)

    const changeMessage = (e) => {
        let text = e.target.value
        props.updateMessageText(text)
    }

    const addMessage = () => {
        props.addMessage()
    }
    return (
        <div className={dialogs.wrapper}>
            <div className={dialogs.dialogs}>
                {DialogItem}
            </div>
            <div className={dialogs.messages}>
                <div>{MessageItem}</div>

                <div className={new_message.container}>
                    <textarea
                         className={new_message.text}
                         onChange={changeMessage}
                         value={props.newMessageText}
                     />
                    <button
                        onClick={addMessage}
                        className={new_message.btn}>
                        Send message
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs
