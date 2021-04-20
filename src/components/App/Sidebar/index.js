import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/product">Products</Link>
                <Link to="/company">Companies</Link>
            </nav>
        </div>
    );
};

export default Sidebar;
