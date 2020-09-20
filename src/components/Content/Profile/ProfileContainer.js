import React from "react";
import * as axios from 'axios'
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfileInfo} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component{

    componentDidMount() {
        console.log(this.props)
        let userId = this.props.match.params.userId
        if (!userId){
            userId=1
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => this.props.setProfileInfo(response.data))
    }

    render() {
        return(
                <Profile profile={this.props.profileInfo}/>
            )
    }
}

let mapStateToProps = (state) => ({
    profileInfo: state.ProfilePage.profileInfo
})

let WithUrlProfileContainer = withRouter(ProfileContainer)


export default connect(mapStateToProps, {setProfileInfo})(WithUrlProfileContainer)
