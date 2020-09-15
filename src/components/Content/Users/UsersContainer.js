import Users from "./Users";
import {connect} from "react-redux";
import {
    FollowActionCreator,
    UnfollowActionCreator,
    SetUsersActionCreator,
    SetCurrentPageActionCreator, SetTotalPagesActionCreator
} from "../../../redux/users-reducer";
import * as axios from "axios";
import React from "react";

export class UsersContainerClass extends React.Component {

    componentDidMount() {
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.set_users(response.data.items)
                this.props.setTotalPages(response.data.totalCount)
                console.log(response.data.totalCount)
            })
    }

    changeCurrentPage = (page) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.set_users(response.data.items)
            })
    }


    render() {
        return <Users
            totalPagesCount={this.props.totalPagesCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            changeCurrentPage={this.changeCurrentPage}
            users={this.props.users}
            unfollowUser={this.props.unfollowUser}
            followUser={this.props.followUser}

        />
    }
}

let mapStateToProps = (state) => {
    return{
        users: state.UsersPage.usersData,
        totalPagesCount: state.UsersPage.totalPagesCount,
        pageSize: state.UsersPage.pageSize,
        currentPage: state.UsersPage.currentPage
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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerClass)

export default UsersContainer
