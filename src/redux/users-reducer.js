const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
    usersData: [
        // {
        //     id: '1',
        //     firstName: 'Sasha',
        //     status: 'Feelin\' good!',
        //     followed: false,
        //     location: {country: 'Ukraine', city: 'Kyiv'},
        //     iconUrl: 'https://produkty.in.ua/api/default_avatar.png'
        // },
        // {
        //     id: '2',
        //     firstName: 'Masha',
        //     status: 'Feelin\' moody!',
        //     followed: false,
        //     location: {country: 'Ukraine', city: 'Kharkiv'},
        //     iconUrl: 'https://produkty.in.ua/api/default_avatar.png'
        // },
        // {
        //     id: '3',
        //     firstName: 'Tasha',
        //     status: 'Let\'s go for a walk!',
        //     followed: false,
        //     location: {country: 'Ukraine', city: 'Lviv'},
        //     iconUrl: 'https://produkty.in.ua/api/default_avatar.png'
        // },
    ]
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
                usersData: [...state.usersData, ...action.users]
            }
        }
        default: return state
    }
}


export let FollowActionCreator = (userId) => ({type: FOLLOW, userId: userId})

export let UnfollowActionCreator = (userId) => ({type: UNFOLLOW, userId: userId})

export let SetUsersActionCreator = (users) => ({type: SET_USERS, users: users})

export default UsersReducer
