import React, { Component } from 'react'
import Header from '../../../components/Header/Header';
import { connect } from "react-redux";
import { checkStock } from "../../../states/actions/dashboard_action";
import { toastr } from 'react-redux-toastr';
import Carousel from 'react-elastic-carousel'

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

    componentDidMount() {
        const config =
        {
            headers: { 'Authorization': `Bearer ${this.state.user.access_token}` }
        }

        this.props.checkWarehouseStock(config);
        this.props.checkStoreStock(config);
    }

    render() {
        const { dashboard } = this.props
        return (
            <div>
                <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn} />
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-12"><label>Stock in store</label></div>
                    </div>
                    <div style={{ overflowX: "scroll", width: "100%", height: "250px", whiteSpace: "nowrap" }}>
                        {
                            Object.entries(dashboard.dashboard.store).map(([key, value]) => (
                                value.map(el =>
                                    <div className="mt-5" style={{ width: "500px", display: "inline-block", margin: "10px" }}>
                                        <div className="card bg-default mb-3" >
                                            <div className="card-header">{el.name}</div>
                                            <div className="card-body text-center">
                                                <h2 className="card-title">{el.stocks[0].qty_stock}</h2>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))
                        }
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-12"><label>Stock in warehouse</label></div>
                    </div>
                    <div style={{ overflowX: "scroll", width: "100%", height: "250px", whiteSpace: "nowrap" }}>
                        {
                            Object.entries(dashboard.dashboard.warehouse).map(([key, value]) => (
                                value.map(el =>
                                    <div className="mt-5" style={{ width: "500px", display: "inline-block", margin: "10px" }}>
                                        <div className="card bg-default mb-3" >
                                            <div className="card-header">{el.name}</div>
                                            <div className="card-body text-center">
                                                <h2 className="card-title">{el.stocks[0].qty_stock}</h2>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}
// Get state from store and pass it
const mapStateToProps = (dashboard) => ({
    dashboard
});

// create function for dispatching
const mapDispatchToProps = dispatch => ({
    checkWarehouseStock: (config) => {
        dispatch(checkStock(2, config));
    },
    checkStoreStock: (config) => {
        dispatch(checkStock(1, config));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
