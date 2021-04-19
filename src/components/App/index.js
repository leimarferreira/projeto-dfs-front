import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignIn } from '../Authentication/index';

function App() {
    return (
        <Switch>
            <Route exact path={["/", "/login"]} component={SignIn}/>
        </Switch>
    )
}

export default App;
