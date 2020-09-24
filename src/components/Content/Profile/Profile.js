import React from "react";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <>
            <ProfileDetails profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <PostsContainer />
        </>
    )
}

export default Profile

