import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Link, Route, Switch } from 'react-router-dom';
import Main from './Router';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Reducers from './states/reducers';
import thunk from 'redux-thunk';
import history from './history';
import ReduxToastr from 'react-redux-toastr'
class Index extends Component {
    render() {
        const store = createStore(Reducers, applyMiddleware(thunk));
        return (

            <Provider store={store}>
                <Router history={history}>
                    <Route component={Main} />
                </Router>
                <ReduxToastr
                    timeOut={4000}
                    newestOnTop={true}
                    position="bottom-right"
                    getState={(state) => state.toastr} // This is the default
                    transitionIn="fadeIn"
                    transitionOut="fadeOut"
                    closeOnToastrClick />
            </Provider>

        );
    }
}
ReactDOM.render(<Index />, document.getElementById('index'));
