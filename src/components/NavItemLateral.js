import React from 'react';

export default function NavItemLateral(props) {
    return (
        <li className="nav-item_lateral">
            <a href="#" className="nav-link">
                {props.icon}
                <span className="link_text" >{props.name}</span>
            </a>
        </li>
    );
}