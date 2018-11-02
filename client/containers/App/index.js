// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// Instruments
import RouteWithSubRoutes from '../../instruments/RouteWithSubRoutes';
// Routes config
import routes from '../../config/routes';

// eslint-disable-next-line
@hot(module)
class App extends Component {
    render() {
        return (
            <Switch>
                {routes.map((route) => (
                    <RouteWithSubRoutes key={route.name} {...route} />
                ))}
            </Switch>
        );
    }
}

export default withRouter(connect()(App));
