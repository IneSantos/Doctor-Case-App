import React from "react";
import './index.css';

const Nav = ({user}) => (
    <ul className="nav">
        <li><a href="">{`Logged in as: ${user.name}`}</a></li>
        <li>|</li>
        <li><a href="">Logout</a></li>
    </ul>
)

export default Nav;