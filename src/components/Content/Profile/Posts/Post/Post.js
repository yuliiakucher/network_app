import React from "react";
import post from './Post.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'

const Post = (props) => {
    return (
        <div className={post.post}>
            <img className={post.avatar} src={require('../../../../../media/img/rose.jpg')}
                 alt='avatar'/>
            <p className={post.text}>{props.message}</p>
            <div className={post.like}>
                <FontAwesomeIcon icon={faHeart}/>
                {props.likes_count}
            </div>
        </div>
    )
}

export default Post
