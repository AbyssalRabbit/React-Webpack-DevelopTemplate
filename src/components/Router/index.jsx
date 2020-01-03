import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import Navigation from '../../pages/Navigation';

const Index = () => (
    <HashRouter>
        <Switch>
            <Route path="/navigation" component={Navigation} />
            <Route path="/home" component={Home} />
            <Route path="/" component={Home} />
        </Switch>
    </HashRouter>
);

export default Index;