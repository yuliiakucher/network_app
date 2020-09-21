import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_PAGES_COUNT = 'SET_TOTAL_PAGES_COUNT'
const SET_PRELOADER = 'SET_PRELOADER'

const initialState = {
    usersData: [],
    currentPage: 1,
    totalPagesCount: 10,
    pageSize: 10,
    isLoading: true
}

const UsersReducer = (state=initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                usersData: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.page
            }
        }
        case SET_TOTAL_PAGES_COUNT: {
            return {
                ...state,
                totalPagesCount: action.pagesNumber
            }
        }
        case SET_PRELOADER: {
            return {
                ...state,
                isLoading: action.value
            }
        }
        default: return state
    }
}


export let followUserSuccess = (userId) => ({type: FOLLOW, userId: userId})

export let unfollowUserSuccess = (userId) => ({type: UNFOLLOW, userId: userId})

export let setUsers = (users) => ({type: SET_USERS, users: users})

export let setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})

export let setTotalPages = (pagesNumber) => ({type: SET_TOTAL_PAGES_COUNT, pagesNumber})

export let setPreloader = (value) => ({type: SET_PRELOADER, value})


export const setUsersThunk = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setPreloader(true))
        dispatch(setCurrentPage(currentPage))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items))
            dispatch(setTotalPages(data.totalCount))
            dispatch(setPreloader(false))
        })
    }
}

export const unfollowUser = (userId) => {
    return (dispatch) => {
        usersAPI.unfollowUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowUserSuccess(userId))
            }
        })
    }
}

export const followUser = (userId) => {
    return (dispatch) => {
        usersAPI.followUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followUserSuccess(userId))
            }
        })
    }
}



export default UsersReducer
