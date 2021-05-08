import React from 'react';
import { Switch, Route, Link, useParams } from 'react-router-dom';
import UserInfo from './Info/index';
import Purchases from './Purchases/index';

const User = () => {
    let { userId } = useParams();

    return (
        <div>
            <ul className="nav nav-justified">
                <li className="nav-item">
                    <Link to={`/user/${userId}/info`} className="nav-link text-dark">User informations</Link>
                </li>
                <li className="nav-item">
                    <Link to={`/user/${userId}/purchases`} className="nav-link text-dark">Purchase history</Link>
                </li>
            </ul>

            <div className="container g-3 p-3 bg-light border shadow">
                <Switch>
                    <Route exact path={["/", "/user/:userId/info"]}>
                        <UserInfo/>
                    </Route>
                    <Route path={"/user/:userId/purchases"}>
                        <Purchases/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default User;
