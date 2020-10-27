import React from 'react';
import { Route, withRouter} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {setInitialiser} from "./redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";

const ProfileContainer = React.lazy(() => import('./components/Content/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import("./components/Content/Dialogs/DialogsContainer"))
const UsersContainer = React.lazy(()=> import("./components/Content/Users/UsersContainer"))

class App extends React.Component {

    componentDidMount() {
        this.props.setInitialiser()
    }

    render() {
        return (
            <>
                {!this.props.initialised
                    ? <Preloader/>
                    : <div className='app-wrapper'>
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
                }
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        initialised: state.App.initialised
    }
}


export default compose(withRouter, connect(mapStateToProps, {setInitialiser}))(App);
