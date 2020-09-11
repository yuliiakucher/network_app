import React from "react";
import Post from "./Post/Post";
import NewPostContainer from "./NewPost/NewPostContainer";


const Posts =(props) =>{



    const PostItem = props.ProfilePage.postsData.map(post =>  <Post likes_count={post.likes_count} message={post.message}/>)

    return(
        <div>
            <NewPostContainer newPostText={props.ProfilePage.newPostText} dispatch={props.dispatch} />
            {PostItem}
        </div>
    )
}

export default Posts


