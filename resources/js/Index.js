import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Main from './Router';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Reducers from './states/reducers';
import thunk from 'redux-thunk';
class Index extends Component {
    render() {
        const store = createStore(Reducers,applyMiddleware(thunk));
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Route component={Main} />
                </BrowserRouter>
            </Provider>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('index'));
