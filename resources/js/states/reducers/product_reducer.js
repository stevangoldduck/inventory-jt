const initialState = {
    items: [],
    loading: false,
    error: null
};

export function products(state = initialState, action) {
    switch (action.type) {
        case "GET_PRODUCT":
            return {
                ...state,
                items: action.payload
            };
        case "FETCH_PRODUCT_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };
        case "FETCH_PRODUCT_BEGIN":
            return {
                ...state,
                loading: true,
                error: null
            };
        default:
            return state;
    }
}


const editProductState = {
    items: []
}

export function editProduct(state = editProductState, action) {
    switch (action.type) {
        case "GET_SELECTED_PRODUCT":
            return {
                ...state,
                items: action.payload.data
            };
        default:
            return state;
    }
}
