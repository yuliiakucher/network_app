import React from "react";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";


const Posts =(props) =>{



    const PostItem = props.postData.postData.map(post =>  <Post likes_count={post.likes_count} message={post.message}/>)

    return(
        <div>
            <NewPost newPostText={props.postData.newPostText} dispatch={props.dispatch} />
            {PostItem}
        </div>
    )
}

export default Posts


