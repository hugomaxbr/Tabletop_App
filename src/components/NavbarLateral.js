import React from 'react';

export default function Navbar_lateral(props) {
    return (
        <nav className='navbar_lateral'>
            <ul className="navbar-nav_lateral" > {props.children} </ul>
        </nav>
    );
}