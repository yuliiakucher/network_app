import React from "react";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import posts from './Posts.module.css'


const Posts =(props) =>{



    const PostItem = props.postsData.map(post =>  <Post likes_count={post.likes_count} message={post.message}/>)

    return(
        <div className={posts.p_container}>
            <NewPost updateNewText={props.updateNewText}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
            />
            {PostItem}
        </div>
    )
}

export default Posts


