import {userAuth} from "./auth-reducer";

const INITIALISED = 'INITIALISED'

const initialState = {
    initialised: false
}

const AppReducer = (state=initialState, action) => {
    switch (action.type) {
        case (INITIALISED):{
            return {
                ...state,
                initialised: true
            }
        }
        default:
            return state
    }
}

let initialiser = () => ({type: INITIALISED})

export let setInitialiser = () => {
    return (dispatch) => {
        let promise = dispatch(userAuth())
        promise.then(() => {
            dispatch(initialiser())
        })
    }
}

export default AppReducer
