import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";
import SidebarReducer from "./sidebar-reducer";
import SearcherReducer from "./searcher-reducer";
import UsersReducer from "./users-reducer";
import AuthReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    SidebarPage: SidebarReducer,
    SeacherPage: SearcherReducer,
    UsersPage: UsersReducer,
    Auth: AuthReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
