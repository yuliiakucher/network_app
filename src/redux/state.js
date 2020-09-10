
let store ={
    _state: {
        ProfileData : {
            postData: [
                {message:'this is my first post', likes_count: 45},
                {message:'this is my second post', likes_count: 5},
                {message:'this is my third post', likes_count: 85},
                {message:'this is my forth post', likes_count: 59},
                {message:'this is my fifth post', likes_count: 59},
            ],
            newPostText: 'la la la'
        },
        DialogsData: {
            dialogData: [
                {id:'1', name: 'Misha'},
                {id:'2', name: 'Sasha'},
                {id:'3', name: 'Maria'},
                {id:'4', name: 'Yuna'},
            ],
            messageData: [
                {id:'1', message: 'Hi'},
                {id:'2', message: 'Hello'},
                {id:'3', message: 'How was your day'},
                {id:'4', message: 'Ok bye'},
            ]
        },
        FriendsData: {
            friendsData:[
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
        if (action.type === 'ADD-POST'){
            const newPost = {
                message: this._state.ProfileData.newPostText,
                likes_count: 0,
            }
            this._state.ProfileData.postData.push(newPost)
            this._callSubscriber(this._state)
            this._state.ProfileData.newPostText = ''
        } else if (action.type === 'UPDATE-NEW-TEXT') {
            this._state.ProfileData.newPostText = action.newText
            this._callSubscriber(this._state)
        }

    }

}


export default store
