import ProfileReducer from './profile-reducer'
import DialogsReducer from './dialogs-reducer'
import SidebarReducer from "./sidebar-reducer";



let store ={
    _state: {
        ProfilePage : {
            postsData: [
                {message:'this is my first post', likes_count: 45},
                {message:'this is my second post', likes_count: 5},
                {message:'this is my third post', likes_count: 85},
                {message:'this is my forth post', likes_count: 59},
                {message:'this is my fifth post', likes_count: 59},
            ],
            newPostText: 'la la la'
        },
        DialogsPage: {
            dialogsData: [
                {id:'1', name: 'Misha'},
                {id:'2', name: 'Sasha'},
                {id:'3', name: 'Maria'},
                {id:'4', name: 'Yuna'},
            ],
            messagesData: [
                {id:'1', message: 'Hi'},
                {id:'2', message: 'Hello'},
                {id:'3', message: 'How was your day'},
                {id:'4', message: 'Ok bye'},
            ],
            newMessageText: 'hi'
        },
        SidebarPage: {
            sidebarData:[
                {id: '1', name: 'Sasha', img:'https://produkty.in.ua/api/default_avatar.png'},
                {id: '2', name: 'Masha', img:'https://produkty.in.ua/api/default_avatar.png'},
                {id: '3', name: 'Zhenia', img:'https://produkty.in.ua/api/default_avatar.png'},
            ]
        }
    },
    _callSubscriber() {},

    getState() {
        return this._state
    },

    // addPost() {
    //     const newPost = {
    //         message: this._state.ProfileData.newPostText,
    //         likes_count: 0,
    //     }
    //     this._state.ProfileData.postData.push(newPost)
    //     this._callSubscriber(this._state)
    //     this._state.ProfileData.newPostText = ''
    // },
    // updatePostText(newText) {
    //     this._state.ProfileData.newPostText = newText
    //     this._callSubscriber(this._state)
    // },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action){

        this._state.ProfileData = ProfileReducer(this._state.ProfileData, action)
        this._state.DialogsData = DialogsReducer(this._state.DialogsData, action)
        this._state.SidebarData = SidebarReducer(this._state.SidebarData, action)

        this._callSubscriber(this._state)


    }
}

export default store
