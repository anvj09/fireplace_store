import React from 'react';
import {NavLink} from "react-router-dom";

function Nav(){
    return(
        <nav>
            <NavLink activeStyle={{fontWeight:"bold", color:"blue"}} exact to={"/"}>Store</NavLink>
            <NavLink activeStyle={{fontWeight:"bold", color:"blue"}} to={"/cart/blue"}>Cart</NavLink>
            <NavLink activeStyle={{fontWeight:"bold", color:"blue"}} to={"/admin/blue"}>Admin</NavLink>
        </nav>
    )
}

export default Nav;