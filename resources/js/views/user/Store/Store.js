import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import { fetchStockProduct, addSO, fetchSO, addRS, fetchRSO, receiveStock } from "../../../states/actions/store_action";
import { toastr } from 'react-redux-toastr';

class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            inputs: ['input-0'],
            remark: "",
            detail: [
                {
                    id: "input-0",
                    product_id: 1,
                    qty: 0
                }
            ],
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

        this.props.fetchStockProducts(config);
        this.props.getStockOut(config);
        this.props.getRSO(config);
    }

    appendInput() {
        var newInput = `input-${this.state.inputs.length}`;
        this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));

        this.setState(prevState => ({ detail: prevState.detail.concat({ id: newInput, product_id: "", qty: 0 }) }));

        //this.setState(prevState => ({ productDetail: { remark: "" } }));
    }

    deleteInput() {
        var currentInput = `input-${this.state.inputs.length - 1}`;
        if (this.state.inputs.length != 1) {
            this.setState(prevState => ({ inputs: prevState.inputs.filter(input => input !== currentInput) }));

            this.setState(prevState => ({ detail: prevState.detail.filter(input => input.id !== currentInput) }));
        }
        else {
            toastr.warning("Warning", "You must provide at least 1 product");
        }
    }

    addRequestStock(remark, detail, token) {
        try {
            this.props.addReqStock(remark, detail, token);
        } catch (error) {
            alert(error);
        }

        this.setState({ detail: { id: 'input-0', product_id: "1", qty: 0 } });
        this.componentDidMount();
    }

    onReceiveStock(rs_id)
    {
        const toastrConfirmOptions = {
            onOk: () => {
                this.props.receiveStock(rs_id, this.state.user.access_token);
            },
            onCancel: () => {
                return false;
            }
        };
        toastr.confirm('Are you sure about that??', toastrConfirmOptions);
    }

    onSubmitStockOut()
    {
        this.props.addNewSo(this.state.remark,this.state.detail,this.state.user.access_token);
    }

    render() {
        const { stockProduct } = this.props;
        const { remark } = this.state;
        return (
            <div>
                <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn} />
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-sm-12">
                            <a href="#" role="button" data-toggle="modal" data-target="#exampleModal" class="btn btn-danger mr-2">Stock Out</a>
                            <a href="#" role="button" data-toggle="modal" data-target="#modal_2" class="btn btn-primary mr-2">Request Stock</a>
                        </div>
                    </div>
                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Create Stock Out</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="">Products</label>
                                                <div className="row mb-2">
                                                    <div className="col-lg-12">
                                                        <button className="btn btn-success btn-sm" onClick={() => this.appendInput()}>+</button>
                                                        <button className="btn btn-danger btn-sm" onClick={() => this.deleteInput()}>-</button>
                                                    </div>
                                                </div>
                                                {this.state.inputs.map(input =>
                                                    <div className="row mb-2">
                                                        <div className="col-lg-6">
                                                            <select key={input + 100} className="form-control"
                                                                onChange={event => {
                                                                    event.persist();
                                                                    this.setState(prevState => {
                                                                        prevState.detail.map((item, i) => {
                                                                            if (input == item.id) {

                                                                                item.product_id = event.target.value;
                                                                            }
                                                                            else {
                                                                                item.product_id;
                                                                            }
                                                                        });

                                                                        return {
                                                                            prevState
                                                                        }
                                                                    })
                                                                }
                                                                }
                                                            >
                                                                <option value="" disabled selected>Select product</option>
                                                                {
                                                                    Object.entries(stockProduct.stockProduct.items).map(([key, value]) => (
                                                                        value.map(el => <option value={el.id}>{el.name}</option>)
                                                                    ))
                                                                }
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <input
                                                                key={input}
                                                                type="number"
                                                                className="form-control"
                                                                placeholder="Qty"
                                                                onChange={event => {
                                                                    event.persist();
                                                                    this.setState(prevState => {
                                                                        prevState.detail.map((item, i) => {
                                                                            if (input == item.id) {

                                                                                item.qty = event.target.value;
                                                                            }
                                                                            else {
                                                                                item.qty;
                                                                            }
                                                                        });

                                                                        return {
                                                                            prevState
                                                                        }
                                                                    })
                                                                }
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="">Remark</label>
                                                <textarea className="form-control" value={remark} cols="30" rows="10" placeholder="Remark" onChange={
                                                    event => this.setState(
                                                        { remark: event.target.value }
                                                    )
                                                }></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button
                                    type="button"
                                    className="btn btn-info"
                                    data-dismiss="modal"
                                    onClick={() => {
                                        this.onSubmitStockOut();
                                    }}
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="modal_2" tabindex="-1" role="dialog" aria-labelledby="modal_2Label" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="modal_2Label">Request Stock</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="">Products</label>
                                                <div className="row mb-2">
                                                    <div className="col-lg-12">
                                                        <button className="btn btn-success btn-sm" onClick={() => this.appendInput()}>+</button>
                                                        <button className="ml-2 btn btn-danger btn-sm" onClick={() => this.deleteInput()}>-</button>
                                                    </div>
                                                </div>
                                                {this.state.inputs.map(input =>
                                                    <div className="row mb-2">
                                                        <div className="col-lg-5">
                                                            <select
                                                                key={input}
                                                                className="form-control"
                                                                onChange={event => {
                                                                    event.persist();
                                                                    this.setState(prevState => {
                                                                        prevState.detail.map((item, i) => {
                                                                            if (input == item.id) {

                                                                                item.product_id = event.target.value;
                                                                            }
                                                                            else {
                                                                                item.product_id;
                                                                            }
                                                                        });

                                                                        return {
                                                                            prevState
                                                                        }
                                                                    })
                                                                }
                                                                }
                                                            >
                                                                {
                                                                    Object.entries(stockProduct.stockProduct.items).map(([key, value]) => (
                                                                        value.map(el => <option value={el.id}>{el.name}</option>)
                                                                    ))
                                                                }
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-7">
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                placeholder="Qty"
                                                                onChange={event => {
                                                                    event.persist();
                                                                    this.setState(prevState => {
                                                                        prevState.detail.map((item, i) => {
                                                                            if (input == item.id) {

                                                                                item.qty = event.target.value;
                                                                            }
                                                                            else {
                                                                                item.qty;
                                                                            }
                                                                        });

                                                                        return {
                                                                            prevState
                                                                        }
                                                                    })
                                                                }
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">Remark</label>
                                                <textarea className="form-control" value={remark} cols="30" rows="10" placeholder="Remark" onChange={
                                                    event => this.setState(
                                                        { remark: event.target.value }
                                                    )
                                                }></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" onClick={() => this.addRequestStock(this.state.remark, this.state.detail, this.state.user.access_token)} className="btn btn-info" data-dismiss="modal">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-header">
                                    Product in Store
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
                                                Object.entries(stockProduct.stockProduct.items).map(([key, value]) => (
                                                    value.map(el => <tr key={el.id}><td>{el.name}</td><td>{el.price}</td><td>{el.type.name}</td><td>{el.stocks[0].qty_stock}</td></tr>)
                                                ))
                                            }
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    Stock Out
                                </div>
                                <div className="card-body">
                                    <table className="table table-striped">
                                        <thead>
                                            <th>Form Number</th>
                                            <th>Products</th>
                                            <th>Remark</th>
                                        </thead>
                                        <tbody>
                                            {
                                                Object.entries(stockProduct.stockProduct.stockOut).map(([key, value]) => (
                                                    value.map(el =>
                                                        <tr key={el.id}>
                                                            <td>
                                                                {el.form_number}
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
                                                        </tr>)
                                                ))
                                            }
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="col-lg-12">
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
                                            <th>
                                                Action
                                            </th>
                                        </thead>
                                        <tbody>
                                            {
                                                Object.entries(stockProduct.stockProduct.RSO).map(([key, value]) => (
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
                                                                        case "new": return "Waiting to send";
                                                                        case "sent":
                                                                        return <button
                                                                        className="btn btn-sm btn-success"
                                                                        onClick={() => { this.onReceiveStock(el.id); this.componentDidMount() }}
                                                                        >Receive</button>;
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

// Get state from store and pass it
const mapStateToProps = (stockProduct) => ({
    stockProduct
});

// create function for dispatching
const mapDispatchToProps = dispatch => ({
    fetchStockProducts: config => {
        dispatch(fetchStockProduct(config));
    },
    addNewSo: (remark, detail, token) => {
        dispatch(addSO(remark, detail, token));
    },
    getStockOut: config => {
        dispatch(fetchSO(config));
    },
    addReqStock: (remark, detail, token) => {
        dispatch(addRS(remark, detail, token));
    },
    getRSO: config => {
        dispatch(fetchRSO(config));
    },
    receiveStock: (rs_id,token) => {
        dispatch(receiveStock(rs_id,token));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Store);
