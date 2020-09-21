// import NewMessage from "./Message/NewMessage/NewMessage";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return{
        dialogsData: state.DialogsPage.dialogsData,
        messagesData: state.DialogsPage.messagesData,
        newMessageText: state.DialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateMessageText: (body) => {
            dispatch(updateMessageTextActionCreator(body))
        }
    }
}




export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs)
