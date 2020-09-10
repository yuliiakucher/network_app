import React from "react";
import newpost from './NewPost.module.css'


const NewPost = (props) => {
    let addPost = () => {
        props.dispatch({type: 'ADD-POST'})
    }
    let RefCurrent = React.createRef()

    let postChange = () => {
        let text = RefCurrent.current.value
        props.dispatch({type: 'UPDATE-NEW-TEXT', newText: text})
    }

    return(
        <div className={newpost.wrapper}>
            <div className={newpost.distinction}/>
            <textarea
                ref={RefCurrent}
                className={newpost.text}
                value={props.newPostText}
                onChange={postChange}
            />
            <button onClick={addPost}>Post!</button>
            <div className={newpost.distinction}/>
        </div>
    )
}

export default NewPost
