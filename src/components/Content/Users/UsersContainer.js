import Users from "./Users";
import {connect} from "react-redux";
import {FollowActionCreator, UnfollowActionCreator, SetUsersActionCreator} from "../../../redux/users-reducer";


let mapStateToProps = (state) => {
    return{
        users: state.UsersPage.usersData
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        followUser: (userId) => {dispatch(FollowActionCreator(userId))},
        unfollowUser: (userId) => {dispatch(UnfollowActionCreator(userId))},
        set_users: (users) => {dispatch(SetUsersActionCreator(users))},

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
