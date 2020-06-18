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
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to={"/"}>Hi, {this.state.user.name}</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            {this.state.isLoggedIn ?
                                <li><Link className="nav-link active" to="/dashboard">Dashboard</Link></li> : ""}
                            {this.state.isLoggedIn ?
                            <li className="nav-item dropdown">
                                <Link className="nav-link active dropdown-toggle"  href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Stock Management</Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/store">Store</Link>
                                    <Link className="dropdown-item" to="/warehouse">Warehouse</Link>
                                </div>
                            </li>: ""}
                            {this.state.isLoggedIn ?
                            <li className="nav-item dropdown">
                                <Link className="nav-link active dropdown-toggle"  href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Products</Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {this.state.isLoggedIn ?
                                <Link className="dropdown-item" to="/products">Product List</Link>: ""}
                                    <a className="dropdown-item" href="/product-category">Product Type</a>
                                </div>
                            </li>: ""}

                            {this.state.isLoggedIn && this.state.user.role == "admin" ?
                            <li>
                                <Link className="nav-link active" to="/accounts">Accounts</Link>

                            </li>: ""}

                            {this.state.isLoggedIn ?
                                <li><Link className="nav-link active" onClick={this.logOut}>Logout</Link></li> : ""}
                            {!this.state.isLoggedIn ?
                                <li><Link className="nav-link active" to="/login">Login</Link> | <Link to="/register">Register</Link></li> : ""}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default withRouter(Header)
