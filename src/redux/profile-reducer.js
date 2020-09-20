const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT'
const SET_PROFILE_INFO = 'SET_PROFILE_INFO'

let initialState = {
    postsData: [
        {id:'1', message:'this is my first post', likes_count: 45},
        {id:'2', message:'this is my second post', likes_count: 5},
        {id:'3', message:'this is my third post', likes_count: 85},
        {id:'4', message:'this is my forth post', likes_count: 59},
        {id:'5', message:'this is my fifth post', likes_count: 59},
    ],
    newPostText: 'la la la',
    profileInfo: {}
}

const ProfileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            return {
                ...state,
                postsData: [...state.postsData, {message: state.newPostText, likes_count: 0,}],
                newPostText: ''
            }
        }
        case UPDATE_NEW_TEXT:{
            return {
                ...state,
                newPostText: action.newText,
            }
        }

        case SET_PROFILE_INFO:{
            return {
                ...state,
                profileInfo: action.profileInfo
            }
        }
        default: return state
    }
}

export const addPostActionCreator = () =>({type: ADD_POST})


export const updateNewTextActionCreator = (text) => {
    return({type: UPDATE_NEW_TEXT, newText: text})
}

export const setProfileInfo = (profileInfo) => ({type: SET_PROFILE_INFO, profileInfo})

export default ProfileReducer
