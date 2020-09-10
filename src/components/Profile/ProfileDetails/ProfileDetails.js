import React from "react";
import details from './ProfileDetails.module.css'
import profile from "../Profile.module.css";


const ProfileDetails = () => {
    return (
        <>
            <div>
                <img className={details.profile_img}
                     src={require('../../../media/img/rose.jpg')}
                     alt='profile'/>
            </div>
            <div>
                profile info
            </div>
        </>

    )
}

export default ProfileDetails
