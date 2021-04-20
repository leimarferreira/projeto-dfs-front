import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header/index'
import Sidebar from './Sidebar/index';
import ProductList from '../Product/List/index';
import CompanyList from '../Company/List/index';

function App() {
    return (
        <div>
            <Header/>
            <Sidebar/>

            <Switch>
                <Route exact path={"/product"}>
                    <ProductList/>
                </Route>
                <Route exact path={"/company"}>
                    <CompanyList/>
                </Route>
            </Switch>
        </div>
    )
}

export default App;
