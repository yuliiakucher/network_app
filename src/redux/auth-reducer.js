import {Authentication} from "../api/api";

const SET_AUTH_USER = 'SET_AUTH_USER'

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state
    }
}

export let setAuthUser = (userId, login, email, isAuth) => ({type: SET_AUTH_USER, payload: {userId, login, email, isAuth}})

export const userAuth = () => {
    return (dispatch) => {
        return Authentication.userAuth()
            .then(data => {
                    if (data.resultCode === 0) {
                        let {id, login, email} = data.data
                        dispatch(setAuthUser(id, login, email, true))
                    }
                }
            )
    }
}

export const userLogin = (email, password, rememberMe) => {
    return (dispatch) => {
        Authentication.userLogin(email, password, rememberMe)
            .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(userAuth())
                    }
                }
            )
    }
}


export const userLogout = () => {
    return (dispatch) => {
        Authentication.userLogout()
            .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(setAuthUser(null, null, null, false))
                    }
                }
            )
    }
}





export default AuthReducer
