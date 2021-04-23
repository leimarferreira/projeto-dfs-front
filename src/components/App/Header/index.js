import React from 'react';
import { Link } from 'react-router-dom';
//import './index.css';

const Header = () => {
    return (
        <div className="navbar navbar-expand-xl bg-dark sticky-top">
            <ul className="navbar-nav nav-pills">
                <li className="nav-item">
                    <Link to="/product" className="nav-link">Products</Link>
                </li>
                <li className="nav-item">
                    <Link to="/company" className="nav-link">Companies</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
