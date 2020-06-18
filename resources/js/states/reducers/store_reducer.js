const initialState = {
    items: [],
    stockOut: [],
    RSO: [],
    loading: false,
    error: null
};

export function stockProduct(state = initialState, action) {
    switch (action.type) {
        case "ADD_RS":
            return {
                error: action.payload
            };
        case "GET_STOCK_PRODUCT":
            return {
                ...state,
                items: action.payload
            };
        case "GET_REQUEST_STOCK":
            return {
                ...state,
                RSO: action.payload
            };
        case "GET_STOCK_OUT":
            return {
                ...state,
                stockOut: action.payload
            };
        case "FETCH_STOCK_PRODUCT_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };
        case "FETCH_STOCK_PRODUCT_BEGIN":
            return {
                ...state,
                loading: true,
                error: null
            };
        default:
            return state;
    }
}
