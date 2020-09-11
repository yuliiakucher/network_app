import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar SidebarPage={props.state.SidebarPage}/>
                <div className='app-wrapper-content'>
                    <Route
                        path='/profile'
                        render={() => <Profile
                            ProfilePage={props.state.ProfilePage}
                            dispatch={props.dispatch}
                        />}/>
                    <Route
                        path='/dialogs'
                        component={() => <DialogsContainer
                            DialogsPage={props.state.DialogsPage}
                            dispatch={props.dispatch}
                            store={props.store}
                        />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
