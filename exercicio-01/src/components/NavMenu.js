/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export const NavMenu = (props) => (
    <ul class="navbar-nav mr-auto">
        {props.items.map(item => (
            <li className="nav-item">
                <a className="nav-link" href={item.link}>{item.title}</a>
            </li>
        ))}
    </ul>
);