import React from "react";
import Post from "./Post/Post";
import NewPostContainer from "./NewPost/NewPostContainer";
import NewPost from "./NewPost/NewPost";


const Posts =(props) =>{



    const PostItem = props.postsData.map(post =>  <Post likes_count={post.likes_count} message={post.message}/>)

    return(
        <div>
            <NewPost updateNewText={props.updateNewText}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
            />
            {PostItem}
        </div>
    )
}

export default Posts


