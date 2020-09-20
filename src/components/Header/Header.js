import React from "react";
import header from './Header.module.css'
import SearcherContainer from "./Searcher/SearcherContainer";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={header.header}>
            <div className={header.header_container}>
                <img src={require('../../media/img/h_icon.png')} alt='header-icon'/>
                <h1 className={header.name}>Lorem Ipsum</h1>
            </div>
            <SearcherContainer/>
            {props.isAuth
                ?<div>{props.login}</div>
                :<NavLink to='/login'>
                    <button className={header.btn}>Login</button>
                </NavLink>
            }


        </header>
    )
}

export default Header

