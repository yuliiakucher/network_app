import React from "react";
import header from './Header.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import navbar from "../Navbar/Navbar.module.css";
import SearcherContainer from "./Searcher/SearcherContainer";

const Header = () =>{
    return(
        <header className={header.header}>
            <div className={header.header_container}>
                <img src={require('../../media/img/h_icon.png')} alt='header-icon'/>
                <h1 className={header.name}>Lorem Ipsum</h1>
            </div>
            <SearcherContainer/>
        </header>
    )
}

export default Header

