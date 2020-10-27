import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileInfo, getStatus, updateStatus} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = this.props.profileInfo.userId
        }
        this.props.getProfileInfo(userId)
        this.props.getStatus(userId)
    }

    render() {

        return(
                <Profile
                    profile={this.props.profileInfo}
                    updateStatus={this.props.updateStatus}
                    status={this.props.status}/>
            )
    }
}


const mapStateToProps = (state) =>{
    return{
        profileInfo: state.ProfilePage.profileInfo,
        status: state.ProfilePage.status
    }
}



export default compose(connect(mapStateToProps, {getProfileInfo, getStatus, updateStatus}),
    withRouter, withAuthRedirect)(ProfileContainer)
