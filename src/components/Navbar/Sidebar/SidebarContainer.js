import React from "react";
import {connect} from "react-redux";
import Sidebar from "./Sidebar";

let mapStateToProps = (state) => {
    return{
        sidebarData: state.SidebarPage.sidebarData
    }
}


const SidebarContainer = connect(mapStateToProps)(Sidebar)


export default SidebarContainer
