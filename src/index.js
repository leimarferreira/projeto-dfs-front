import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import App from './components/App/index';
import Authentication from './components/Authentication';
import { getToken } from './services/shared/api';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './extensions/LocalStorage.js';

const isLoggedIn = () => {
    let token = getToken();

    if (token) {
        return true;
    }

    return false;
};

let loggedIn = isLoggedIn();

window.addEventListener('storagechange', () => {
    loggedIn = isLoggedIn();
});

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                {loggedIn
                    ? <App/>
                    : <Authentication/>
                }
            </Route>
            <Route exact path={["/signin", "/signup"]}>
                {loggedIn
                    ? <Redirect to="/" />
                    : <Authentication/>
                }
            </Route>
            <Route exact path={
                    [
                        "/product",
                        "/product/:id",
                        "/company",
                        "/company/:id",
                        "/user/:userId",
                        "/user/:userId/info",
                        "/user/:userId/purchases",
                        "/payment"
                    ]
                }
            >
                {loggedIn
                    ? <App/>
                    : <Redirect to="/" />
                }
            </Route>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
