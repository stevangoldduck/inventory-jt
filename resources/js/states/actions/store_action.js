import axios from 'axios';
import {toastr} from 'react-redux-toastr';

axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};

export function addSO(remark, detail, token) {
        axios.post("api/add-stock-out", { remark : remark, detail : detail}, { headers: { 'Authorization': `Bearer ${token}` } }
        )
            .then(response => {
                toastr.success("Stock Out","Stock out created");
            })
            .catch(e => console.log(e));

            return fetchSO({ headers: { 'Authorization': `Bearer ${token}` } });
}

export function receiveStock(rs_id, token) {
    axios.post("api/receive-stock", { rs_id: rs_id }, { headers: { 'Authorization': `Bearer ${token}` } })
        .then(response => {
            if (response.data.is_success) {
                toastr.success("Store Adjustment","Product in store adjusted");
            }
            else {
                let messages = "";
                Object.entries(response.data.messages).forEach(item => {
                    messages = item[1][0];
                });

                toastr.error('Store Adjustment', messages);
            }
        })
        .catch(e => console.log(e));

    return fetchRSO({ headers: { 'Authorization': `Bearer ${token}` } });
}

export function addRS(remark, detail, token) {
    return dispatch => {
        return axios.post("api/add-request-stock", { remark : remark, detail : detail}, { headers: { 'Authorization': `Bearer ${token}` } })
        .then(response => {
            console.log(response)
        })
        .catch(e => console.log(e))
    };
}

export function fetchSO(config) {
    return dispatch => {
        return axios.get("api/get-stock-out", config)
            .then(response => {
                dispatch(setSO(response.data));
            })
            .catch(e => console.log(e));
    };
}

export function fetchStockProduct(config) {
    return dispatch => {
        dispatch(fetchStockProductBegin());
        return axios.post("api/get-product-stock", { location: "1" }, config)
            .then(response => {
                dispatch(setProduct(response.data));
            })
            .catch(e => dispatch(fetchStockProductFailure(e)));
    };
}

export function fetchRSO(config) {
    return dispatch => {
        return axios.get("api/get-request-stock", config)
            .then(response => {
                dispatch(setRSO(response.data));
            })
            .catch(e => console.log(e));
    };
}

export const fetchStockProductBegin = () => ({
    type: "FETCH_STOCK_PRODUCT_BEGIN"
});

export function setProduct(data) {
    return {
        type: "GET_STOCK_PRODUCT",
        payload: { data }
    };
}

export function setRSO(data) {
    return {
        type: "GET_REQUEST_STOCK",
        payload: { data }
    };
}

export const fetchStockProductFailure = error => ({
    type: "FETCH_STOCK_PRODUCT_FAILURE",
    payload: { error }
});


export function addNewSO(data) {
    return {
        type: "ADD_STOCK_OUT",
        payload: data
    }
}

export function addNewRS(data) {
    return {
        type: "ADD_RS",
        payload: data
    };
}

export function setSO(data) {
    return {
        type: "GET_STOCK_OUT",
        payload: { data }
    };
}
