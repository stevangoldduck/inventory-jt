import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: props.userData,
            isLoggedIn: props.userIsLoggedIn
        };
        this.logOut = this.logOut.bind(this);
    }

    logOut() {
        let appState = {
            isLoggedIn: false,
            user: {}
        };
        localStorage["appState"] = JSON.stringify(appState);
        this.setState(appState);
        this.props.history.push('/login');
    }

    render() {
        const aStyle = {
            cursor: 'pointer'
        };

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to={"/"}>Hi, {this.state.user.name}</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            {this.state.isLoggedIn ?
                                <li><Link className="nav-link" to="/dashboard">Dashboard</Link></li> : ""}
                            {this.state.isLoggedIn ?
                                <li><Link className="nav-link" onClick={this.logOut}>Logout</Link></li> : ""}
                            {!this.state.isLoggedIn ?
                                <li><Link className="nav-link" to="/login">Login</Link> | <Link to="/register">Register</Link></li> : ""}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default withRouter(Header)
