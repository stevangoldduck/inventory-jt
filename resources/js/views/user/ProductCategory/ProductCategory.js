import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import { toastr } from 'react-redux-toastr';
import EditProductCategoryModal from './EditProductCategoryModal';

import { fetchProductCategory, addProductCategory, removeProductCategory, updateProductCategory } from "../../../states/actions/product_category_action";

class ProductCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            listUser: [],
            isLoggedIn: false,
            name: "",
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

        this.props.fetchProductCategory(config);
    }

    onUpdateProductCategory(id,name)
    {
        if(name == "")
        {
            toastr.error("Field error","Please fill all fields");
            return;
        }
        let AppState = JSON.parse(localStorage["appState"]);
        let token = AppState.user.access_token;
        this.props.updateExistingProductCategory(id,name,token);
    }

    render() {
        const { productCategory, addNewProductCategory, removeExistingProductCategory } = this.props;
        const { name } = this.state;
        return (
            <div>
                <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn} />
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-sm-12">
                            <Link to="#" role="button" data-toggle="modal" data-target="#modal_pc" className="btn btn-success"> Create Product Category </Link>
                            <div className="modal fade" id="modal_pc" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Create New Product Category</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label>Name</label>
                                                        <input
                                                            type="text"
                                                            value={name}
                                                            onChange={event => this.setState({ name: event.target.value })}
                                                            className="form-control"
                                                            placeholder="Name"
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
                                                    if (!name) {
                                                        toastr.error('Empty Field','Make sure all field is filled')
                                                        return;
                                                    }
                                                    addNewProductCategory( name, this.state.user.access_token);
                                                    this.setState({ name: ""});
                                                }}
                                                className="btn btn-info"
                                            >
                                                Add New Product Category
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
                                    Product Category List
                                </div>
                                <div className="card-body">
                                    <table className="table table-striped">
                                        <thead>
                                            <th width="80%">Name</th>
                                            <th width="20%">Action</th>
                                        </thead>
                                        <tbody>
                                            {
                                                Object.entries(productCategory.productCategory.items).map(([key, value]) => (
                                                    value.map(el =>
                                                    <tr key={el.id}>
                                                        <td>{el.name}</td>
                                                        <td>
                                                            <Link className="btn btn-warning btn-sm mr-2"
                                                            to="#"
                                                            role="button" data-toggle="modal" data-target={'#modal_edit_pc_'+el.id}
                                                            >Edit</Link>
                                                            <EditProductCategoryModal id={el.id} name={el.name} onClick={ (id,name) => { this.onUpdateProductCategory(id,name) } } />
                                                            <button
                                                            onClick={ () => { removeExistingProductCategory(el.id,this.state.user.access_token)  } }
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
const mapStateToProps = (productCategory) => ({
    productCategory
});

// create function for dispatching
const mapDispatchToProps = dispatch => ({
    fetchProductCategory: config => {
        dispatch(fetchProductCategory(config));
    },
    removeExistingProductCategory: (productID, token) => {
        dispatch(removeProductCategory(productID, token));
    },
    addNewProductCategory: (name, token) => {
        dispatch(addProductCategory(name, token));
    },
    updateExistingProductCategory: (id,name,token) => {
        dispatch(updateProductCategory(id,name,token));
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductCategory);
