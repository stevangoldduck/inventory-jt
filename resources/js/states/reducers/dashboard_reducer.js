const initialState = {
    warehouse: [],
    store: [],
    loading: false,
    error: null
};

export function dashboard(state = initialState, action) {
    switch (action.type) {
        case "GET_WAREHOUSE_STOCK":
            return {
                ...state,
                warehouse: action.payload
            };
        case "GET_STORE_STOCK":
            return {
                ...state,
                store: action.payload
            };
        default:
            return state;
    }
}
