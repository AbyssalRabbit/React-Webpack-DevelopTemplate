import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from '../../../pages/home'
import Navigation from '../../../pages/navigation'

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