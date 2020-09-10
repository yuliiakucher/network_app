import React from "react";
import close from './CloseFriends.module.css'


const CloseFriends = (props) => {
    const ItemElement = props.data.map(friend => (
        <div className={close.items}>
            <img className={close.icon} src={friend.img} alt='friend'/>
            <div>{friend.name}</div>
        </div>

    ))
    return(
        <>
            <h3 className={close.header}>Friends</h3>
            <div className={close.wrapper}>
                {ItemElement}
            </div>
        </>

    )
}

export default CloseFriends
