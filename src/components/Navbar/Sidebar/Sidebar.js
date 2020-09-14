import React from "react";
import close from './Sidebar.module.css'
import {NavLink} from "react-router-dom";


const Sidebar = (props) => {
    const ItemElement = props.sidebarData.map(friend => (
        <div className={close.items}>
            <img className={close.icon_image} src={friend.img} alt='friend'/>
            <div>{friend.name}</div>
        </div>

    ))
    return(
        <>
            <NavLink to='/users' className={close.link}>
                <h3 className={close.header}>Friends</h3>
            </NavLink>

            <div className={close.item_wrapper}>
                {ItemElement}
            </div>
        </>

    )
}

export default Sidebar
