import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth
})

export const withAuthRedirect = (Component) =>{
    const RedirectComponent = (props) => {
        if (!props.isAuth) return <Redirect to='/login'/>
        return <Component {...props}/>
    }
    return connect(mapStateToProps)(RedirectComponent)
}
