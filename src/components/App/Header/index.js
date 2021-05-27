import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserDataService from '../../../services/User/index';
import { TOKEN_KEY } from '../../../services/shared/api';
import './index.css';

const Header = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState(null);
    
    const history = useHistory();
    useEffect(() => {
        retrieveUser()
            .then(setUser)
            .catch(setError);
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
        window.location.reload();
    };

    return (
        <div className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
            <button className="navbar-toggler ms-3" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse mx-3" id="navbarContent">
                <ul className="navbar-nav nav-pills">
                    <li className="nav-item">
                        <Link to="/product" className="nav-link">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/company" className="nav-link">Companies</Link>
                    </li>
                    
                </ul>
                {!error &&
                <ul className="navbar-nav navbar-pills d-flex ms-auto">
                    <li className="nav-item dropdown">
                        <button className="btn btn-link nav-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="true">
                            { user?.name }
                        </button>

                        <div className="dropdown-menu dropdown-menu-dark bg-dark dropdown-menu-start">
                            <Link to={`/user/${ user?.id }/info`} className="dropdown-item">
                                User info
                            </Link>
                            <Link to={`/user/${ user?.id }/purchases`} className="dropdown-item">
                                Purchase history
                            </Link>
                            <button className="dropdown-item text-danger" onClick={ logOut }>Log out</button>
                        </div>
                    </li>
                </ul>}
            </div>
        </div>
    );
};

export default Header;
