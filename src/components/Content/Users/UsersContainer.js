import Users from "./Users";
import {connect} from "react-redux";
import {
    followUser,
    unfollowUser,
    setUsers, setCurrentPage, setTotalPages, setPreloader
} from "../../../redux/users-reducer";
import * as axios from "axios";
import React from "react";
import Preloader from "../../Preloader/Preloader";

export class UsersContainerClass extends React.Component {

    componentDidMount() {
        this.props.setPreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalPages(response.data.totalCount)
                console.log(response.data.totalCount)
                this.props.setPreloader(false)
            })
    }

    changeCurrentPage = (page) => {
        this.props.setPreloader(true)
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setPreloader(false)
            })
    }


    render() {
        return(
            <>
                {this.props.isLoading ? <Preloader/> : null}
                <Users
                    totalPagesCount={this.props.totalPagesCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    changeCurrentPage={this.changeCurrentPage}
                    users={this.props.users}
                    unfollowUser={this.props.unfollowUser}
                    followUser={this.props.followUser}
                />
            </>
            )
    }
}

let mapStateToProps = (state) => {
    return{
        users: state.UsersPage.usersData,
        totalPagesCount: state.UsersPage.totalPagesCount,
        pageSize: state.UsersPage.pageSize,
        currentPage: state.UsersPage.currentPage,
        isLoading: state.UsersPage.isLoading
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return{
//         followUser: (userId) => {dispatch(FollowActionCreator(userId))},
//         unfollowUser: (userId) => {dispatch(UnfollowActionCreator(userId))},
//         setUsers: (users) => {dispatch(SetUsersActionCreator(users))},
//         setCurrentPage: (page) => {dispatch(SetCurrentPageActionCreator(page))},
//         setTotalPages: (pagesNumber) => {dispatch(SetTotalPagesActionCreator(pagesNumber))},
//         setPreloader: (value) => {dispatch(SetPreloaderActionCreator(value))}
//     }
// }

const UsersContainer = connect(mapStateToProps, {
    followUser, unfollowUser, setUsers, setCurrentPage, setTotalPages, setPreloader
})(UsersContainerClass)

export default UsersContainer
