import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

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
                        component={() => <DialogsContainer

                        />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
