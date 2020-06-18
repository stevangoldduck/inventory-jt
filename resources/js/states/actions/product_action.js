import axios from 'axios';
import { toastr } from 'react-redux-toastr'

axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};

export function addProduct(product, token) {
    const { name, type, price, qty } = product;

    axios.post("api/add-product", { name, type, price, qty }, { headers: { 'Authorization': `Bearer ${token}` } }
    )
        .then(response => {
            if (response.data.is_success == true) {
                toastr.success('Product Creation', 'Success !!');
            }
            else {
                let messages = "";
                Object.entries(response.data.messages).forEach(item => {
                    messages = item[1][0];
                });

                toastr.error('Product Creation', messages);
            }
        });
    return fetchProduct({ headers: { 'Authorization': `Bearer ${token}` } });
}

export function removeProduct(id, token) {
    axios.delete("api/delete-product", {
        headers: { 'Authorization': `Bearer ${token}` },
        data: {
            id: id
        }
    })
        .then(response => {
            if (response.data.is_success == true) {
                toastr.success('Product Deletion', 'Success !!');
            }
            else {
                toastr.error('Product Deletion', response.data.message);
            }
        });

    return fetchProduct({ headers: { 'Authorization': `Bearer ${token}` } });
}

export function fetchProduct(config) {
    return dispatch => {
        //dispatch(fetchProductBegin());
        return axios.get("api/get-product", config)
            .then(response => {
                dispatch(setProductList(response.data));
                toastr.success('Fetching Product', 'Completed');
            });

    };
}


export function updateProduct(id, name, price, type, token) {
    axios.put("api/update-product", { id: id, name: name, price: price, type: type }, { headers: { 'Authorization': `Bearer ${token}` } }
    )
        .then(response => {
            if (response.data.is_success == true) {
                toastr.success('Product Update', 'Success !!');

            }
            else {
                let messages = "";
                Object.entries(response.data.messages).forEach(item => {
                    messages = item[1][0];
                });

                toastr.error('Product Update', messages);
            }
        });

    return fetchProduct({ headers: { 'Authorization': `Bearer ${token}` } });
}

export const fetchProductBegin = () => ({
    type: "FETCH_PRODUCT_BEGIN"
});

export function setProductList(data) {
    return {
        type: "GET_PRODUCT",
        payload: { data }
    };
}

export function setSelectedProduct(data) {
    return {
        type: "GET_SELECTED_PRODUCT",
        payload: data
    }
}

export const fetchProductFailure = error => ({
    type: "FETCH_PRODUCT_FAILURE",
    payload: { error }
});
