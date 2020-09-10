import React from "react";
import post from './Post.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'

const Post = (props) => {
    return (
        <div className={post.post}>
            <img className={post.avatar} src={require('../../../../media/img/rose.jpg')}
                 alt='avatar'/>
            <p className={post.text}>{props.message}</p>
            <span className={post.like}>
                <FontAwesomeIcon icon={faThumbsUp}/>
                {props.likes_count}
            </span>
        </div>
    )
}

export default Post
