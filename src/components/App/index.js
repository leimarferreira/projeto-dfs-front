import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header/index'
import Sidebar from './Sidebar/index';
import ProductList from '../Product/List/index';

function App() {
    return (
        <div>
            <Header/>
            <Sidebar/>

            <Switch>
                <Route exact path={"/product"}>
                    <ProductList/>
                </Route>
            </Switch>
        </div>
    )
}

export default App;
