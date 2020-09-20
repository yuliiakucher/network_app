import React from "react";
import details from './ProfileDetails.module.css'


const ProfileDetails = (props) => {
    return (
        <>
            <div>
                <img className={details.profile_img}
                     src={require('../../../../media/img/rose.jpg')}
                     alt='profile'/>
            </div>
            <div>
                {props.profile.fullName}
            </div>
        </>

    )
}

export default ProfileDetails
