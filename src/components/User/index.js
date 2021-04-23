import React from 'react';
import { Switch, Route, Link, useParams } from 'react-router-dom';
import UserInfo from './Info/index';
import Purchases from './Purchases/index';

const User = () => {
    let { userId } = useParams();
    console.log(userId);

    return (
        <div>
            <ul className="nav nav-tabs nav-justified">
                <li className="nav-item">
                    <Link to={`/user/${userId}/info`} className="nav-link">User informations</Link>
                </li>
                <li className="nav-item">
                    <Link to={`/user/${userId}/purchases`} className="nav-link">Purchase history</Link>
                </li>
            </ul>

            <div>
                <Switch>
                    <Route path={`/user/${userId}/info`}>
                        <UserInfo/>
                    </Route>
                    <Route path={`/user/${userId}/purchases`}>
                        <Purchases/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default User;
