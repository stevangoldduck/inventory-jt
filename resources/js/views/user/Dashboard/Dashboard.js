import React, { Component } from 'react'
import Header from '../../../components/Header/Header';
class Home extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            user: {}
        }
    }
    // check if user is authenticated and storing authentication data as states if true
    componentWillMount() {
        let state = localStorage["appState"];
        if (state) {
            let AppState = JSON.parse(state);
            this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState.user });
        }
    }

    render() {
        return (
            <div>
                <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn} />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 mt-5">
                            <div className="card text-white bg-primary mb-3" style={{ maxWidth: "18 rem" }}>
                                <div className="card-header">Sales</div>
                                <div className="card-body text-center">
                                    <h2 className="card-title">Rp. 5.500.000</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 mt-5">
                            <div className="card text-white bg-success mb-3" style={{ maxWidth: "18 rem" }}>
                                <div className="card-header">Total Products</div>
                                <div className="card-body text-center">
                                    <h2 className="card-title">34</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 mt-5">
                            <div className="card text-white bg-danger mb-3" style={{ maxWidth: "18 rem" }}>
                                <div className="card-header">Request Form</div>
                                <div className="card-body text-center">
                                    <h2 className="card-title">12</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 mt-5">
                            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18 rem" }}>
                                <div className="card-header">DO Form</div>
                                <div className="card-body text-center">
                                    <h2 className="card-title">12</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home
