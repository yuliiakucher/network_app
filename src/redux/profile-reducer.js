const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT'

const ProfileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                message: state.newPostText,
                likes_count: 0,
            }
            state.postData.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_TEXT:
            state.newPostText = action.newText
            return state
        default: return state
    }
}

export const addPostActionCreator = () =>({type: ADD_POST})


export const updateNewTextActionCreator = (text) => {
    return({type: UPDATE_NEW_TEXT, newText: text})
}

export default ProfileReducer
