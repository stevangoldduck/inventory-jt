import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Main from './Router';
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducers from './states/reducers';
class Index extends Component {
    render() {
        const store = createStore(Reducers);
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
