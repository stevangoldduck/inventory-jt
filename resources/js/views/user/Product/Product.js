import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import { toastr } from 'react-redux-toastr';
import EditProductModal from './EditProductModal';

import { addProduct, removeProduct, fetchProduct, updateProduct } from "../../../states/actions/product_action";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            listUser: [],
            isLoggedIn: false,
            name: "",
            type: 1,
            price: 0,
            qty: 0
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

        this.props.fetchProducts(config);
    }

    onUpdateProduct(id,name,price,type)
    {
        if(name == "" || price == 0 || type == "")
        {
            toastr.error("Field error","Please fill all fields");
            return;
        }
        let AppState = JSON.parse(localStorage["appState"]);
        let token = AppState.user.access_token;
        this.props.updateExistingProduct(id,name,price,type,token);
    }

    render() {
        const { products, addNewProduct, removeExistingProduct } = this.props;
        const { name, type, price, qty } = this.state;
        return (
            <div>
                <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn} />
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-sm-12">
                            <Link to="#" role="button" data-toggle="modal" data-target="#exampleModal" className="btn btn-success"> Create Product </Link>
                            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Create New Product</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            value={name}
                                                            onChange={event => this.setState({ name: event.target.value })}
                                                            className="form-control"
                                                            placeholder="Name"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <select className="form-control" onChange={event => this.setState({ type: event.target.value })}>
                                                            <option value="1">Kapal</option>
                                                            <option value="2">Motor</option>
                                                            <option value="3">Mobil</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="number"
                                                            value={price}
                                                            onChange={event => this.setState({ price: event.target.value })}
                                                            className="form-control"
                                                            placeholder="Phone"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="number"
                                                            value={qty}
                                                            onChange={event => this.setState({ qty: event.target.value })}
                                                            className="form-control"
                                                            placeholder="Phone"
                                                        />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    if (!name || !qty || !price || !type) {
                                                        toastr.error('Epty Field','Make sure all field is filled')
                                                        return;
                                                    }
                                                    addProduct({ name, qty, price, type }, this.state.user.access_token);
                                                    this.setState({ name: "", qty: 1, price: 0, type: 1 });
                                                }}
                                                className="btn btn-info"
                                            >
                                                Add New Product
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    Product List
                                </div>
                                <div className="card-body">
                                    <table className="table table-striped">
                                        <thead>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Category</th>
                                            <th>Action</th>
                                        </thead>
                                        <tbody>
                                            {
                                                Object.entries(products.products.items).map(([key, value]) => (
                                                    value.map(el =>
                                                    <tr key={el.id}>
                                                        <td>{el.name}</td>
                                                        <td>{el.price}</td>
                                                        <td>{el.type.name}</td>
                                                        <td>
                                                            <Link className="btn btn-warning btn-sm mr-2"
                                                            to="#"
                                                            role="button" data-toggle="modal" data-target={'#exampleModal_'+el.id}
                                                            >Edit</Link>
                                                            <EditProductModal id={el.id} name={el.name} price={el.price} type={el.type.id} onClick={ (id,name,price,type) => {this.onUpdateProduct(id,name,price,type);} } />
                                                            <button
                                                            onClick={() => {
                                                                removeExistingProduct(el.id, this.state.user.access_token);
                                                                }
                                                            }
                                                            className="btn btn-sm btn-danger">
                                                                Delete
                                                            </button>
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
const mapStateToProps = (products) => ({
    products
});

// create function for dispatching
const mapDispatchToProps = dispatch => ({
    fetchProducts: config => {
        dispatch(fetchProduct(config));
    },
    removeExistingProduct: (productID, token) => {
        dispatch(removeProduct(productID, token));
    },
    addNewProduct: (product, token) => {
        dispatch(addProduct(product, token));
    },
    updateExistingProduct: (id, name, price, type, token) => {
        dispatch(updateProduct(id,name,price,type,token));
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Product);
