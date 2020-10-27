import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {userAuth, userLogout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.Auth.isAuth,
        login: state.Auth.login
    }
}

export default connect(mapStateToProps, {userAuth, userLogout})(HeaderContainer)
