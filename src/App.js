import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import './App.css';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar friendsData={props.state.FriendsData}/>
                <div className='app-wrapper-content'>
                    <Route
                        path='/profile'
                        render={() => <Profile
                            profileData={props.state.ProfileData}
                            dispatch={props.dispatch}
                        />}/>
                    <Route
                        path='/dialogs'
                        component={() => <Dialogs
                            dialogsData={props.state.DialogsData}
                            dispatch={props.dispatch}
                        />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
