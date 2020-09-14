import React from "react";
import {NavLink} from "react-router-dom";
import dialog from "./Dialog.module.css";

const Dialog = (props) => {
    const path = '/dialogs/' + props.id
    return(
        <NavLink to={path} activeClassName={dialog.active} className={dialog.dialog}>
            <img src={require('../../../../media/img/rose.jpg')}/>
            <span>{props.name}</span>
        </NavLink>
    )
}

export default Dialog
