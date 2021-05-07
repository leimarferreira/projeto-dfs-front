import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserDataService from '../../../services/User/index';
import { TOKEN_KEY } from '../../../services/shared/api';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';
import './index.css';

const Header = () => {
    const [user, setUser] = useState({});
    const history = useHistory();
    useEffect(() => {
        retrieveUser().then(setUser);
    }, []);

    const retrieveUser = async () => {
        const id = localStorage.getItem("currentUserId");
        
        let response = await UserDataService.get(id);
        return response.data;
    };

    const logOut = () => {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem("currentUserId");
        history.push("/");
    };

    return (
        <div className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav nav-pills">
                    <li className="nav-item">
                        <Link to="/product" className="nav-link">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/company" className="nav-link">Companies</Link>
                    </li>
                    
                </ul>
                <ul className="navbar-nav navbar-pills ml-auto">
                    <li className="nav-item dropdown">
                        <button className="btn btn-link nav-link dropdown-toggle" data-toggle="dropdown" data-bs-auto-close="true">
                            { user.name }
                        </button>

                        <div className="dropdown-menu bg-dark dropdown-menu-start">
                            <Link to={`/user/${ user.id }/info`} className="dropdown-item text-white">
                                User info
                            </Link>
                            <Link to={`/user/${ user.id }/purchases`} className="dropdown-item text-white">
                                Purchase history
                            </Link>
                            <button className="dropdown-item text-danger" onClick={ logOut }>Log out</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
