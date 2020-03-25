import axios from 'axios';

export function addAccount(account) {
    const { name, email, password, role } = account;
    return {
        type: "ADD_ACCOUNT",
        name,
        email,
        password,
        role
    };

    // return function(dispatch)
    // {
    //     dispatch(setArticleDetails(account));
    // }
}

export function removeAccount(id) {
    return {
        type: "REMOVE_ACCOUNT",
        id
    };
}

export function fetchArticleDetails(config) {
    return dispatch => {
        dispatch(fetchAccountBegin());
        return axios.get("api/get-user", config)
            .then(response => {
                dispatch(setArticleDetails(response.data.list_user));
                //return response.data.list_user;
            })
            .catch(e=>dispatch(fetchAccountFailure(e)));
    };
}

export const fetchAccountBegin = () => ({
    type: "FETCH_ACCOUNT_BEGIN"
});

export function setArticleDetails(data) {
    // const { name, email,  role } = data;
    return {
        type: "GET_ACCOUNT",
        payload: { data }
    };
}

export const fetchAccountFailure = error => ({
    type: "FETCH_ACCOUNT_FAILURE",
    payload: { error }
});
