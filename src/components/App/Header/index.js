import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserDataService from '../../../services/User/index';
import { TOKEN_KEY } from '../../../services/shared/api';
import 'bootstrap/js/dist/dropdown'
//import './index.css';

const Header = () => {
    const [user, setUser] = useState({});
    const history = useHistory();
    useEffect(() => {
        retrieveUser();
    }, {});

    const retrieveUser = () => {
        const id = localStorage.getItem("currentUserId");
        UserDataService.get(id)
            .then(response => {
                setUser(response.data)
            });
    };

    const logOut = () => {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem("currentUserId");
        history.push("/");
    };

    return (
        <div className="navbar navbar-expand-sm bg-dark sticky-top">
            <ul className="navbar-nav nav-pills">
                <li className="nav-item">
                    <Link to="/product" className="nav-link">Products</Link>
                </li>
                <li className="nav-item">
                    <Link to="/company" className="nav-link">Companies</Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                        { user.name }
                    </a>

                    <div className="dropdown-menu">
                        <Link to={`/user/${ user.id }/info`} className="dropdown-item">
                            User info
                        </Link>
                        <Link to={`/user/${ user.id }/purchases`} className="dropdown-item">
                            Purchase history
                        </Link>
                        <a className="dropdown-item" onClick={ logOut }>Log out</a>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Header;
