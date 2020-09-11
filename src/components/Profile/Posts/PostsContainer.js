import React from "react";

import Posts from "./Posts";
import {addPostActionCreator, updateNewTextActionCreator} from "../../../redux/profile-reducer";
import MyContext from "../../../MyContext";


const PostsContainer = (props) => {

    return (
        <MyContext.Consumer>

            {store => {
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let updateNewText = (body) => {
                    store.dispatch(updateNewTextActionCreator(body))
                }

                let state = store.getState()
                return (
                    <Posts
                        updateNewText={updateNewText}
                        addPost={addPost}
                        newPostText={state.newPostText}
                        postsData={state.ProfilePage.postsData}
                    />
                )
                }}
        </MyContext.Consumer>
    )


}

export default PostsContainer


