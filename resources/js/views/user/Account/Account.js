import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from '../../../components/Header/Header';
import AccountList from './AccountList';
import AccountItem from './AccountItem';
import { addAccount, removeAccount } from "../../../states/actions";
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
        this.setState({listUser: this.props.fetchArticleDetails(config)})
        //axios.get('api/get-user', config).then(response => { this.setState({ listUser: response.data.list_user }) })
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
                                                this.setState({ name: "", email: "", password: "", role: "" });
                                                addNewAccount({ name, email, password, role });
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
                                        {this.state.listUser.map(person => <tr><td>{person.name}</td><td>{person.email}</td><td><button className="btn btn-warning">View {person.id}</button></td></tr>)}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <AccountList>
                                {accounts.map(account => {
                                    return (
                                        <AccountItem
                                            key={account.id}
                                            name={account.name}
                                            role={account.role}
                                            onClickDelete={() => removeExistingAccount(account.id)}
                                        />
                                    );
                                })}
                            </AccountList>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
// Get state from store and pass it
const mapStateToProps = ({ accounts }) => ({
    accounts
});

// create function for dispatching
const mapDispatchToProps = dispatch => ({
    addNewAccount: accounts => {
        dispatch(addAccount(accounts));
    },
    removeExistingAccount: contactID => {
        dispatch(removeAccount(contactID));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
