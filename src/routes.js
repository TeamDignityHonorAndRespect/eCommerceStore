import React from "react";
import { Switch, Route } from "react-router-dom";
import AdvertisementExampleCommonUnits from './components/Ads';
import App from "./App";
import CardExampleCard from './components/Cards';

export default (
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/ads" component={AdvertisementExampleCommonUnits} />
        <Route exact path="/cards" component={CardExampleCard} />
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