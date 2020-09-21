import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileInfo} from "../../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


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


const mapStateToProps = (state) =>{
    return{
        profileInfo: state.ProfilePage.profileInfo
    }
}



export default compose(connect(mapStateToProps, {getProfileInfo}),
    withRouter,withAuthRedirect)(ProfileContainer)
