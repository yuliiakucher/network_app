import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer";
import UsersContainer from "./components/Content/Users/UsersContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route
                        path='/profile/:userId?'
                        render={() => <ProfileContainer/>}/>
                    <Route
                        path='/dialogs'
                        component={() => <DialogsContainer/>}/>
                    <Route
                        path='/users'
                        render={() => <UsersContainer/>}/>
                    <Route
                        path='/login'
                        render={() => <LoginContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
