import React from "react";
import profile from './Profile.module.css'
import Posts from "./Posts/Posts";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import PostsContainer from "./Posts/PostsContainer";

const Profile = () => {

    return (
        <>
            <ProfileDetails />
            <PostsContainer />
        </>
    )
}

export default Profile

