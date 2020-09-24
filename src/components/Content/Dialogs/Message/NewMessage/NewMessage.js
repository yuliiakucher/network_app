import React from "react";
import new_message from './NewMessage.module.css'
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../../../../redux/dialogs-reducer";


const NewMessage = (props) => {

    const changeMessage = (e) =>{

        let text = e.target.value
        props.dispatch(updateMessageTextActionCreator(text))
    }

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }


    return(
        <div className={new_message.container}>
            <textarea
                className={new_message.text}
                onChange={changeMessage}
                value={props.newMessageText}
            />
            <button
                onClick={addMessage}
                className={new_message.btn_message}>Send message</button>
        </div>
    )
}

export default NewMessage
