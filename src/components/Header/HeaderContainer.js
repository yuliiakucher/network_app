import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {userAuth} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.userAuth()
    }

    render() {
        return(
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        isAuth: state.Auth.isAuth,
        login: state.Auth.login
    }
}

export default connect(mapStateToProps, {userAuth}) (HeaderContainer)
