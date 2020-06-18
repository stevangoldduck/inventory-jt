const initialState = {
    items: [],
    loading: false,
    error: null
};

export function productCategory(state = initialState, action) {
    switch (action.type) {
        case "GET_PRODUCT_CATEGORY":
            return {
                ...state,
                items: action.payload
            }
                ;
        case "FETCH_PRODUCT_CATEGORY_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: [],
            };
        case "FETCH_PRODUCT_CATEGORY_BEGIN":
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: true,
                error: null
            };
        default:
            return state;
    }


}
