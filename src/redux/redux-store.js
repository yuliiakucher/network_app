import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";
import SidebarReducer from "./sidebar-reducer";
import SearcherReducer from "./searcher-reducer";

let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    SidebarPage: SidebarReducer,
    SeacherPage: SearcherReducer
})

let store = createStore(reducers)

export default store
