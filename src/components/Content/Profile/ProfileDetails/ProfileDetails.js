import React from "react";
import details from './ProfileDetails.module.css'
import ProfileStatus from "./ProfileStatus/ProfileStatus";


const ProfileDetails = (props) => {
    return (
        <>
            <div>
                <img className={details.profile_img}
                     src={require('../../../../media/img/rose.jpg')}
                     alt='profile'/>
            </div>
            <ProfileStatus status='la la la'/>
            <div>
                {props.profile.fullName}
            </div>
            <div>
                {props.profile.aboutMe}
            </div>
        </>

    )
}

export default ProfileDetails
