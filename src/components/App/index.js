import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Authentication from '../Authentication/index';

function App() {
    return (
        <Switch>
            <Route exact path={"/"} component={ Authentication }/>
        </Switch>
    )
}

export default App;
