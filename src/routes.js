import React from "react";
import { Switch, Route } from "react-router-dom";
import AdvertisementExampleCommonUnits from './components/Ads';
import App from "./App";
import CardExampleCard from './components/Cards';
// import Users from './components/Users';
import Products from './components/Products';
import Market from './components/Market';
import Login from './components/Login';

export default (
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/ads" component={AdvertisementExampleCommonUnits} />
        <Route exact path="/cards" component={CardExampleCard} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/Market" component={Market} />
        <Route
            path="*"
            render={() => (
                <div>
                    <p>Not Found</p>
                </div>
            )}
        />
    </Switch>
);