import Users from "./Users";
import {connect} from "react-redux";
import {
    followUserSuccess,
    unfollowUserSuccess, setUsersThunk, unfollowUser, followUser
} from "../../../redux/users-reducer";
import React from "react";
import Preloader from "../../Preloader/Preloader";

export class UsersContainerClass extends React.Component {

    componentDidMount() {
        this.props.setUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    changeCurrentPage = (page) => {
        this.props.setUsersThunk(page, this.props.pageSize)
    }


    render() {
        return (
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
    return {
        users: state.UsersPage.usersData,
        totalPagesCount: state.UsersPage.totalPagesCount,
        pageSize: state.UsersPage.pageSize,
        currentPage: state.UsersPage.currentPage,
        isLoading: state.UsersPage.isLoading
    }
}


const UsersContainer = connect(mapStateToProps, {
    followUserSuccess, unfollowUserSuccess, setUsersThunk, unfollowUser, followUser
})(UsersContainerClass)

export default UsersContainer
