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
    return function (dispatch) {
        return axios.get("api/get-user",config)
            .then(({ response }) => {
                dispatch(setArticleDetails(response.data.list_user));
            });
    };
}

export function setArticleDetails(data)
{
    const { name, email,  role } = data;
    return {
        type: "GET_ACCOUNT",
        name,
        email,
        role
    };
}
