import axios from 'axios';
import { toastr } from 'react-redux-toastr'

axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};

export function addProductCategory(name, token) {
    axios.post("api/add-product-category", { name: name }, { headers: { 'Authorization': `Bearer ${token}` } }
    )
        .then(response => {
            if (response.data.is_success == true) {
                toastr.success('Product Category Creation', 'Success !!');
            }
            else {
                let messages = "";
                Object.entries(response.data.messages).forEach(item => {
                    messages = item[1][0];
                });

                toastr.error('Product Category Creation', messages);
            }
        });
    return fetchProductCategory({ headers: { 'Authorization': `Bearer ${token}` } });
}

export function removeProductCategory(id, token) {
    axios.delete(`api/delete-product-category/${id}`, {
        headers: { 'Authorization': `Bearer ${token}` }
    })
        .then(response => {
            if (response.data.is_success == true) {
                toastr.success('Product Category Deletion', 'Success !!');
            }
            else {
                toastr.error('Product Category Deletion', response.data.messages);
            }
        });

    return fetchProductCategory({ headers: { 'Authorization': `Bearer ${token}` } });
}

export function fetchProductCategory(config) {
    return dispatch => {
        //dispatch(fetchProductBegin());
        return axios.get("api/get-product-category", config)
            .then(response => {
                dispatch(setProductCategoryList(response.data));
                toastr.success('Fetching Product Category', 'Completed');
            });

    };
}

export function updateProductCategory(id, name, token) {
    axios.put("api/update-product-category", { id: id, name: name }, { headers: { 'Authorization': `Bearer ${token}` } }
    )
        .then(response => {
            if (response.data.is_success == true) {
                toastr.success('Product Category Update', 'Success !!');
            }
            else {
                let messages = "";
                Object.entries(response.data.messages).forEach(item => {
                    messages = item[1][0];
                });

                toastr.error('Product Category Update', messages);
            }
        });

    return fetchProductCategory({ headers: { 'Authorization': `Bearer ${token}` } });
}

export const fetchProductCategoryBegin = () => ({
    type: "FETCH_PRODUCT_CATEGORY_BEGIN"
});

export function setProductCategoryList(data) {
    return {
        type: "GET_PRODUCT_CATEGORY",
        payload: { data }
    };
}

export const fetchProductFailure = error => ({
    type: "FETCH_PRODUCT_FAILURE",
    payload: { error }
});
