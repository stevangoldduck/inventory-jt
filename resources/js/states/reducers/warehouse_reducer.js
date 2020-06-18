const initialState = {
    items: [],
    stockRequest: [],
    loading: false,
    error: null
};

export function warehouseProduct(state = initialState, action) {
    switch (action.type) {
        case "GET_PRODUCT_WAREHOUSE":
            return {
                ...state,
                items: action.payload
            };
        case "GET_WAREHOUSE_REQUEST_STOCK":
            return {
                ...state,
                stockRequest: action.payload
            };
        default:
            return state;
    }
}
