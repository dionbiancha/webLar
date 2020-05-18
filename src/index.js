import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginArea from './pages/LoginArea';

import { Provider } from 'react-redux';
import { Store } from './store';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/login" component={LoginArea} />
            </Switch>
        </BrowserRouter>
    </Provider>, 
document.getElementById('root'));
