import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import SignIn from './SignIn/index';
import SignUp from './SignUp/index';

const Authentication = () => {
    return (
        <div>
            <span><Link to="/signin">Sign in</Link></span>
            <span><Link to="/signup">Sign up</Link></span>

            <Switch>
                <Route exact path={["/", "/signin"]} component={SignIn} />
                <Route exact path={"/signup"} component={SignUp} />
            </Switch>
        </div>
    );
};

export default Authentication;
