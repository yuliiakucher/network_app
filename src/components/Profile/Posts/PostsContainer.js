import React from "react";
import Posts from "./Posts";
import {addPostActionCreator, updateNewTextActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newPostText: state.ProfilePage.newPostText,
        postsData: state.ProfilePage.postsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewText: (body) => {dispatch(updateNewTextActionCreator(body))},
        addPost: (body) => {dispatch(addPostActionCreator())}
    }
}

const PostsContainer= connect(mapStateToProps, mapDispatchToProps) (Posts)

export default PostsContainer


