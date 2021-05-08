import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header/index';
import ProductList from '../Product/List/index';
import Product from '../Product/index';
import CompanyList from '../Company/List/index';
import Company from '../Company/index';
import Payment from '../Payment/index';
import User from '../User/index';

function App() {
    return (
        <div>
            <Header/>

            <div className="container w-sm-75 w-md-50">
                <Switch>
                    <Route exact path={"/product"}>
                        <ProductList/>
                    </Route>
                    <Route path={"/product/:id"}>
                        <Product/>
                    </Route>
                    <Route exact path={"/company"}>
                        <CompanyList/>
                    </Route>
                    <Route path={"/company/:id"}>
                        <Company/>
                    </Route>
                    <Route exact path={"/payment"}>
                        <Payment/>
                    </Route>
                    <Route path={"/user/:userId"}>
                        <User/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default App;
