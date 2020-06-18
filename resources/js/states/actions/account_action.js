import axios from 'axios';

axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};

export function addAccount(account, token) {
    const { name, email, password, role } = account;

    return dispatch => {
        return axios.post("api/add-user", { name, email, password, role }, { headers: { 'Authorization': `Bearer ${token}` } }
        )
            .then(response => {
                dispatch(addNewAccount(response.data.data));
            })
            .catch(e => console.log(e));
    };
}

export function removeAccount(id, token) {
    return dispatch => {
        dispatch(removeAccountBegin(id));
        return axios.delete("api/delete-user", {
            headers: { 'Authorization': `Bearer ${token}` },
            data: {
                id: id
            }
        })
            .then(response => {
                console.log(response);
            })
            .catch(e => console.log(e));
    };
}

export function fetchAccount(config) {
    return dispatch => {
        dispatch(fetchAccountBegin());
        return axios.get("api/get-user", config)
            .then(response => {
                dispatch(setAccountList(response.data));

            })
            .catch(e => dispatch(fetchAccountFailure(e)));
    };
}

export const removeAccountBegin = (id) => ({
    type: "REMOVE_ACCOUNT",
    id: id
});

export const fetchAccountBegin = () => ({
    type: "FETCH_ACCOUNT_BEGIN"
});

export function setAccountList(data) {
    // const { name, email,  role } = data;
    return {
        type: "GET_ACCOUNT",
        payload: data
    };
}
export const fetchAccountFailure = error => ({
    type: "FETCH_ACCOUNT_FAILURE",
    payload: { error }
});

export function addNewAccount(data) {
    return {
        type: "ADD_ACCOUNT",
        payload: data
    }
};
