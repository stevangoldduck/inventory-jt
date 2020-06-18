import React from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import NotFound from './views/NotFound/NotFound';

// User is LoggedIn
import PrivateRoute from './PrivateRoute'
import Dashboard from './views/user/Dashboard/Dashboard';
import Account from './views/user/Account/Account';
import Product from './views/user/Product/Product';
import Store from './views/user/Store/Store';
import Warehouse from './views/user/Warehouse/Warehouse';
import ProductCategory from './views/user/ProductCategory/ProductCategory';
const Main = props => (

    <Switch>
        <Route exact path='/' component={Login} />
        {/*User will LogIn*/}
        <Route path='/login' component={Login} />

        <Route path='/register' component={Register} />

        <Route path='/logout' />
        {/* User is LoggedIn*/}
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <PrivateRoute path='/accounts' component={Account} />
        <PrivateRoute path='/products' component={Product} />
        <PrivateRoute path='/store' component={Store} />
        <PrivateRoute path='/warehouse' component={Warehouse} />
        <PrivateRoute path='/product-category' component={ProductCategory} />
        {/*Page Not Found*/}
        <Route component={NotFound} />
    </Switch>
);
export default Main;
