import React from "react";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <>
            <ProfileDetails profile={props.profile}/>
            <PostsContainer />
        </>
    )
}

export default Profile

