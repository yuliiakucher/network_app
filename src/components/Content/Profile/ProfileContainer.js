import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileInfo} from "../../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId

        this.props.getProfileInfo(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to='/login'/>
        return(
                <Profile profile={this.props.profileInfo}/>
            )
    }
}

let mapStateToProps = (state) => ({
    profileInfo: state.ProfilePage.profileInfo,
    isAuth: state.Auth.isAuth
})

let WithUrlProfileContainer = withRouter(ProfileContainer)


export default connect(mapStateToProps, {getProfileInfo})(WithUrlProfileContainer)
