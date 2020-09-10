import React from "react";
import dialogs from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const DialogItem = props.dialogsData.dialogData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)
    const MessageItem = props.dialogsData.messageData.map(message => <Message message={message.message} id={message.id}/>)

    return (
        <div className={dialogs.wrapper}>
            <div className={dialogs.dialogs}>
                {DialogItem}
            </div>
            <div className={dialogs.messages}>
                {MessageItem}
            </div>
        </div>
    )
}

export default Dialogs
