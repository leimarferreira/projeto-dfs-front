import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App/index';
import Authentication from './components/Authentication';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path={["/", "/signin", "/signup"]}>
                <Authentication/>
            </Route>
            <Route exact path={"/product"}>
                <App/>
            </Route>
            <Route exact path={"/product/:id"}>
                <App/>
            </Route>
            <Route exact path={"/company"}>
                <App/>
            </Route>
            <Route exact path={"/company/:id"}>
                <App/>
            </Route>
            <Route exact path={"/payment"}>
                <App/>
            </Route>
            <Route exact path={["/user/:userId", "/user/:userId/info", "/user/:userId/purchases"]}>
                <App/>
            </Route>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
