import Login from "./Login";
import {connect} from "react-redux";
import {userLogin} from "../../redux/auth-reducer";


let mapStateToProps = (state) => {
    return{
        isAuth: state.Auth.isAuth
    }

}


const LoginContainer = connect(mapStateToProps, {userLogin})(Login)

export default LoginContainer
