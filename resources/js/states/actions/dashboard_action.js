import axios from 'axios';
import {toastr} from 'react-redux-toastr';

axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};

export function checkStock(location,config) {
    return dispatch => {
        return axios.post("api/get-product-stock", { location: location }, config)
            .then(response => {
                if(location == "1")
                {
                    dispatch(setStore(response.data));
                }
                else{
                    dispatch(setWarehouse(response.data));
                }
            })
            .catch(e => console.log(e));
    };
}

export function setStore(data) {
    return {
        type: "GET_STORE_STOCK",
        payload: { data }
    };
}

export function setWarehouse(data) {
    return {
        type: "GET_WAREHOUSE_STOCK",
        payload: { data }
    };
}
