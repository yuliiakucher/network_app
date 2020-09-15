import Users from "./Users";
import {connect} from "react-redux";
import {
    FollowActionCreator,
    UnfollowActionCreator,
    SetUsersActionCreator,
    SetCurrentPageActionCreator, SetTotalPagesActionCreator
} from "../../../redux/users-reducer";


let mapStateToProps = (state) => {
    return{
        users: state.UsersPage.usersData,
        totalPagesCount: state.UsersPage.totalPagesCount,
        pageSize: state.UsersPage.pageSize
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        followUser: (userId) => {dispatch(FollowActionCreator(userId))},
        unfollowUser: (userId) => {dispatch(UnfollowActionCreator(userId))},
        set_users: (users) => {dispatch(SetUsersActionCreator(users))},
        setCurrentPage: (page) => {dispatch(SetCurrentPageActionCreator(page))},
        setTotalPages: (pagesNumber) => {dispatch(SetTotalPagesActionCreator(pagesNumber))}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
