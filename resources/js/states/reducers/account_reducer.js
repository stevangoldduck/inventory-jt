const initialState = {
    items: [],
    loading: false,
    error: null
};

export function accounts(state = initialState, action) {
    switch (action.type) {
        case "ADD_ACCOUNT":
            return {
                ...state,
                items : [...state.items, action.payload]
            }
        case "GET_ACCOUNT":
            return {
                ...state,
                items: action.payload
            }
                ;
        case "REMOVE_ACCOUNT":
            return {
                ...state,
                items : state.items.filter( accounts => accounts.id !== action.id)
            };
        case "FETCH_ACCOUNT_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: [],
            };
        case "FETCH_ACCOUNT_BEGIN":
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
