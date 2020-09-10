import React from "react";
import header from './Header.module.css'

const Header = () =>{
    return(
        <header className={header.header}>
            <img src={require('../../media/img/header-icon.png')} alt='header-icon'/>
            <h1 className={header.name}>Lorem Ipsum</h1>
        </header>
    )
}

export default Header

