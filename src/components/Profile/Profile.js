import React from "react";
import profile from './Profile.module.css'
import Posts from "./Posts/Posts";
import ProfileDetails from "./ProfileDetails/ProfileDetails";

const Profile = (props) => {

    return (
        <>
            <ProfileDetails />
            <Posts ProfilePage={props.ProfilePage} dispatch={props.dispatch} />
        </>
    )
}

export default Profile

