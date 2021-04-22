import React, { useEffect, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import SignIn from './SignIn/index';
import SignUp from './SignUp/index';

const Authentication = () => {
    const [containerSize, setContainerSize] = useState('w-100');

    useEffect(() => {
        window.addEventListener('resize', resizeContainer);
        // resizeContainer();
    });

    const resizeContainer = () => {
        let width = window.screen.width;
        if (width <= 600) {
            setContainerSize('w-100');
        } else if (width < 768) {
            setContainerSize('w-75');
        } else if (width < 992) {
            setContainerSize('w-50');
        } else {
            setContainerSize('w-25');
        }
    }

    return (
        <div className={`container ${containerSize}`}>
            <ul className="nav nav-tabs nav-justified">
                <li className="nav-item">
                    <Link to="/signin" className="nav-link">Sign in</Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup" className="nav-link">Sign up</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={["/", "/signin"]} component={SignIn} />
                <Route exact path={"/signup"} component={SignUp} />
            </Switch>
        </div>
    );
};

export default Authentication;
