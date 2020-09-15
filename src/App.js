import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Content/Profile/Profile";
import './App.css';
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer";
import UsersContainer from "./components/Content/Users/UsersContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route
                        path='/profile'
                        render={() => <Profile />}/>
                    <Route
                        path='/dialogs'
                        component={() => <DialogsContainer/>}/>
                    <Route
                        path='/users'
                        render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
