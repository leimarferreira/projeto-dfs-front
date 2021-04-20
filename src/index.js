import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App/index';
import Authentication from './components/Authentication';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path={["/", "/signin", "/signup"]}>
                <Authentication/>
            </Route>
            <Route exact path={"/product"}>
                <App/>
            </Route>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
