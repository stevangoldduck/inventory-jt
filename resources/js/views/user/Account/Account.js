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
            phone: "",
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

    componentDidMount()
    {
        const config =
        {
            headers: { 'Authorization': `Bearer ${this.state.user.access_token}`}
        }

        axios.get('api/get-user',config).then( response => { this.setState({listUser:response.data.list_user}) } )
    }


    render() {
        const { id, name, phone } = this.state;
        const { accounts, addNewAccount, removeExistingAccount } = this.props;
        return (
            <div>
                <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn} />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card text-center" style={{ marginTop: '15px' }}>
                                <div className="card-body">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            value={id}
                                            onChange={event => this.setState({ id: event.target.value })}
                                            className="form-control"
                                            placeholder="Id"
                                        />
                                    </div>
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
                                            type="text"
                                            value={phone}
                                            onChange={event => this.setState({ phone: event.target.value })}
                                            className="form-control"
                                            placeholder="Phone"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                if (!name || !phone) {
                                                    alert("Field cannot be empty !");
                                                    return;
                                                }

                                                this.setState({ id: "", name: "", phone: "" });
                                                addNewAccount({ id, name, phone });
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
                                            {this.state.listUser.map( person => <tr><td>{person.name}</td><td>{person.email}</td><td><button className="btn btn-warning">View</button></td></tr>)}
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
                                            phone={account.phone}
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
