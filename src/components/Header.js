import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

const Header = () => {
    return (
        <header>
            <div>
                <ul className="headerLinks">
                    <li className="headerLis"><Link to={'/home'}>Home</Link></li>
                    <li className="headerLis"><Link to={'/about'}>About</Link></li>
                    <li className="headerLis"><Link to={'/projects'}>Projects</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
