import axios from 'axios';
import { toastr } from 'react-redux-toastr'

axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};

export function fetchWarehouseData(config) {
    return dispatch => {
        return axios.post("api/get-product-stock", { location: "2" }, config)
            .then(response => {
                dispatch(setWarehouseData(response.data));
            })
            .catch(e => console.log(e));
    };
}

export function transferStock(rs_id, token) {
    axios.post("api/transfer-stock", { rs_id: rs_id }, { headers: { 'Authorization': `Bearer ${token}` } })
        .then(response => {
            if (response.data.is_success) {
                toastr.success("Transfer Stock", response.data.messages)
            }
            else {
                let messages = "";
                Object.entries(response.data.messages).forEach(item => {
                    messages = item[1][0];
                });

                toastr.error('Transfer Stock', messages);
            }
        })
        .catch(e => console.log(e));

        return fetchRequestStock({ headers: { 'Authorization': `Bearer ${token}` } });
}

export function fetchRequestStock(config) {
    return dispatch => {
        return axios.get("api/get-request-stock", config)
            .then(response => {
                dispatch(setWarehouseRequestStock(response.data));
            })
            .catch(e => console.log(e));
    };
}

export function addStockIn(product_id, qty, token) {
    axios.put("api/add-stock-in", { product_id: product_id, qty: qty }, { headers: { 'Authorization': `Bearer ${token}` } })
        .then(response => {
            if (response.data.is_success) {
                toastr.success("Stock In", response.data.messages)
            }
            else {
                let messages = "";
                Object.entries(response.data.messages).forEach(item => {
                    messages = item[1][0];
                });

                toastr.error('Stock In', messages);
            }
        })
        .catch(e => console.log(e));

    return fetchWarehouseData({ headers: { 'Authorization': `Bearer ${token}` } });
}

export function setWarehouseData(data) {
    return {
        type: "GET_PRODUCT_WAREHOUSE",
        payload: { data }
    };
}


export function setWarehouseRequestStock(data) {
    return {
        type: "GET_WAREHOUSE_REQUEST_STOCK",
        payload: { data }
    };
}
