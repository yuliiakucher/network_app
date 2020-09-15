const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_PAGES_COUNT = 'SET_TOTAL_PAGES_COUNT'

const initialState = {
    usersData: [],
    currentPage: 1,
    totalPagesCount: 0,
    pageSize: 10
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
        default: return state
    }
}


export let FollowActionCreator = (userId) => ({type: FOLLOW, userId: userId})

export let UnfollowActionCreator = (userId) => ({type: UNFOLLOW, userId: userId})

export let SetUsersActionCreator = (users) => ({type: SET_USERS, users: users})

export let SetCurrentPageActionCreator = (page) => ({type: SET_CURRENT_PAGE, page})

export let SetTotalPagesActionCreator = (pagesNumber) => ({type: SET_TOTAL_PAGES_COUNT, pagesNumber})

export default UsersReducer
