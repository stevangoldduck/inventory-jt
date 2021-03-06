import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from '../../../components/Header/Header';
import { addAccount, removeAccount, fetchAccount } from "../../../states/actions/account_action";
class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            email: "",
            password: "",
            role: "",
            user: {},
            listUser: [],
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

        this.props.fetchAccounts(config)
    }

    render() {
        const { name, email, password, role } = this.state;
        const { accounts, addNewAccount, removeExistingAccount } = this.props;
        return (
            <div>
                <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn} />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card text-center" style={{ marginTop: '15px' }}>
                                <div className="card-body">
                                    <div class="list-group">
                                        <a href="#" role="button" data-toggle="modal" data-target="#exampleModal" class="list-group-item list-group-item-action list-group-item-primary">Create Account</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Create User Account</h5>
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
                                                    <input
                                                        type="email"
                                                        value={email}
                                                        onChange={event => this.setState({ email: event.target.value })}
                                                        className="form-control"
                                                        placeholder="Phone"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        value={password}
                                                        onChange={event => this.setState({ password: event.target.value })}
                                                        className="form-control"
                                                        placeholder="Phone"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <select className="form-control" onChange={event => this.setState({ role: event.target.value })}>
                                                        <option value="admin">Admin</option>
                                                        <option value="storeman">Storeman</option>
                                                        <option value="stockman">Stockman</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                if (!name || !password || !email) {
                                                    alert("Field cannot be empty !");
                                                    return;
                                                }
                                                addNewAccount({ name, email, password, role }, this.state.user.access_token);
                                                this.setState({ name: "", email: "", password: "", role: "" });
                                            }}
                                            className="btn btn-info"
                                        >
                                            Add New Account
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="card text-center" style={{ marginTop: '15px' }}>
                                <div className="card-body">
                                    <table className="table table-striped">
                                        <thead>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Action</th>
                                        </thead>
                                        <tbody>
                                            {
                                                Object.entries(accounts.accounts.items).map(([key, el]) => (
                                                    <tr key={el.id}><td>{el.name}</td><td>{el.email}</td><td><button onClick={()=>{removeExistingAccount(el.id,this.state.user.access_token)}} className="btn btn-sm btn-danger">Delete</button></td></tr>
                                                ))
                                            }
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
// Get state from store and pass it
const mapStateToProps = (accounts) => ({
    accounts
});

// create function for dispatching
const mapDispatchToProps = dispatch => ({
    addNewAccount: (account,token) => {
        dispatch(addAccount(account,token));
    },
    removeExistingAccount: (contactID,token) => {
        dispatch(removeAccount(contactID,token));
    },
    fetchAccounts: config => {
        dispatch(fetchAccount(config));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
