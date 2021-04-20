import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header/index'
import Sidebar from './Sidebar/index';

function App() {
    return (
        <div>
            <Header/>
            <Sidebar/>
        </div>
    )
}

export default App;
