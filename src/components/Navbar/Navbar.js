import React from "react";
import {NavLink} from 'react-router-dom'
import navbar from './Navbar.module.css'
import SidebarContainer from "./Sidebar/SidebarContainer";

const Navbar = (props) => {
    return (
        <nav className={navbar.nav}>
            <ul>
                <li className={navbar.link}><NavLink className={navbar.navlink} activeClassName={navbar.active} to='/profile'>Profile</NavLink></li>
                <li className={navbar.link}><NavLink className={navbar.navlink} activeClassName={navbar.active} to='/dialogs'>Messages</NavLink></li>
                <li className={navbar.link}><NavLink className={navbar.navlink} activeClassName={navbar.active} to='/news'>News</NavLink></li>
                <li className={navbar.link}><NavLink className={navbar.navlink} activeClassName={navbar.active} to='/music'>Music</NavLink></li>
                <SidebarContainer />
                <li className={navbar.link}><NavLink className={navbar.navlink} activeClassName={navbar.active} to='/settings'>Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar

