const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT'

let initialState = {
    postsData: [
        {message:'this is my first post', likes_count: 45},
        {message:'this is my second post', likes_count: 5},
        {message:'this is my third post', likes_count: 85},
        {message:'this is my forth post', likes_count: 59},
        {message:'this is my fifth post', likes_count: 59},
    ],
    newPostText: 'la la la'
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
        default: return state
    }
}

export const addPostActionCreator = () =>({type: ADD_POST})


export const updateNewTextActionCreator = (text) => {
    return({type: UPDATE_NEW_TEXT, newText: text})
}

export default ProfileReducer
