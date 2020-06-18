import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import { fetchWarehouseData, fetchRequestStock, addStockIn, transferStock } from "../../../states/actions/warehouse_action";
import { toastr } from 'react-redux-toastr';

class Warehouse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            product_id: 1,
            qty: 0,
            isLoggedIn: false
        }
    }

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

        this.props.fetchProductWarehouse(config);
        this.props.fetchWarehouseRequestStock(config);
    }

    onSubmit(product_id, qty) {
        if (product_id == "" || qty == 0) {
            toastr.error("Missing fields", "Make sure you've selected a product and not 0");
            return;
        }

        this.props.addNewStockIn(product_id, qty, this.state.user.access_token);
    }

    onTransferStock(rs_id) {
        const toastrConfirmOptions = {
            onOk: () => {
                this.props.transferToStore(rs_id, this.state.user.access_token);
            },
            onCancel: () => {
                return false;
            }
        };
        toastr.confirm('Are you sure about that??', toastrConfirmOptions);
    }

    render() {
        const { warehouseProduct } = this.props;
        const { product_id, qty } = this.state;
        return (
            <div>
                <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn} />
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-sm-12">
                            <a href="#" role="button" data-toggle="modal" data-target="#modal_stockin" className="btn btn-success mr-2">Stock In</a>
                            <div className="modal fade" id="modal_stockin" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Stock In</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <div className="row mb-2">
                                                            <div className="col-lg-6">
                                                                <label htmlFor="">Products</label>
                                                                <select value={product_id}
                                                                    className="form-control"
                                                                    onChange={event => this.setState({ product_id: event.target.value })}
                                                                >
                                                                    {
                                                                        Object.entries(warehouseProduct.warehouseProduct.items).map(([key, value]) => (
                                                                            value.map(el => <option key={el.id} value={el.id}>{el.name}</option>)
                                                                        ))
                                                                    }
                                                                </select>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <label htmlFor="">Quantity</label>
                                                                <input
                                                                    type="number"
                                                                    value={qty}
                                                                    onChange={event => this.setState({ qty: event.target.value })}
                                                                    className="form-control"
                                                                    placeholder="Qty"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" onClick={() => { this.onSubmit(product_id, qty) }} className="btn btn-info" data-dismiss="modal">Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-header">
                                    Product in Warehouse
                                </div>
                                <div className="card-body">
                                    <table className="table table-striped">
                                        <thead>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Category</th>
                                            <th>Stock Qty</th>
                                        </thead>
                                        <tbody>
                                            {
                                                Object.entries(warehouseProduct.warehouseProduct.items).map(([key, value]) => (
                                                    value.map(el => <tr key={el.id}><td>{el.name}</td><td>{el.price}</td><td>{el.type.name}</td><td>{el.stocks[0].qty_stock}</td></tr>)
                                                ))
                                            }
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-header">
                                    Request Stock
                                </div>
                                <div className="card-body">
                                    <table className="table table-striped">
                                        <thead>
                                            <th>Form Number</th>
                                            <th>Products</th>
                                            <th>Remark</th>
                                            <th>Action</th>
                                        </thead>
                                        <tbody>
                                            {
                                                Object.entries(warehouseProduct.warehouseProduct.stockRequest).map(([key, value]) => (
                                                    value.map(el =>
                                                        <tr key={el.id}>
                                                            <td>
                                                                {el.rsf_number}
                                                            </td>
                                                            <td>
                                                                <ul>
                                                                    {
                                                                        el.details.map(e =>
                                                                            <li>{e.product.name} ({e.qty})</li>
                                                                        )
                                                                    }
                                                                </ul>
                                                            </td>
                                                            <td>{el.remark}</td>
                                                            <td>
                                                                {(() => {
                                                                    switch (el.status) {
                                                                        case "new": return <button
                                                                            className="btn btn-sm btn-success"
                                                                            onClick={() => { this.onTransferStock(el.id) }}
                                                                        >
                                                                            Send
                                                                    </button>;
                                                                        case "sent": return "Sent to store";
                                                                        default: return 'Received in store';
                                                                    }
                                                                })()}

                                                            </td>
                                                        </tr>)
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// Get state from Warehouse and pass it
const mapStateToProps = (warehouseProduct) => ({
    warehouseProduct
});

// create function for dispatching
const mapDispatchToProps = dispatch => ({
    fetchProductWarehouse: config => {
        dispatch(fetchWarehouseData(config));
    },
    fetchWarehouseRequestStock: config => {
        dispatch(fetchRequestStock(config));
    },
    addNewStockIn: (product_id, qty, token) => {
        dispatch(addStockIn(product_id, qty, token));
    },
    transferToStore: (rs_id, token) => {
        dispatch(transferStock(rs_id, token));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Warehouse);
