import searcher from "./Searcher.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import React from "react";


const Searcher = (props) => {

    let updateSearchText = (e) => {
        let text = e.target.value
        props.updateSearchText(text)
    }

    let makeSearch = () => {
        props.makeSearch()
    }

    return(
        <div className={searcher.searcher_wrapper} >
            <input
                className={searcher.searcher}
                value={props.newSearchText}
                onChange={updateSearchText}
            />
            <div className={searcher.icon} onClick={makeSearch}>
                <FontAwesomeIcon icon={faSearch}/>
            </div>
        </div>
    )
}

export default Searcher
