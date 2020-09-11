import {connect} from "react-redux";
import Searcher from "./Searcher";
import {updateSearchActionCreator, makeSearchActionCreator} from "../../../redux/searcher-reducer";


let mapStateToProps = (state) => {
    return{
        newSearchText: state.SeacherPage.newSearchText
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateSearchText: (body) => dispatch(updateSearchActionCreator(body)),
        makeSearch: () => dispatch(makeSearchActionCreator())
    }
}

const SearcherContainer = connect(mapStateToProps, mapDispatchToProps)(Searcher)

export default SearcherContainer
