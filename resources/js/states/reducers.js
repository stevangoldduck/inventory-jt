import { combineReducers } from "redux";

const initialState = {
    items: [],
    loading: false,
    error: null
};

function accounts(state = initialState, action) {
    switch (action.type) {
        case "ADD_ACCOUNT":
            // Add new account
            return {
                ...state,
                    name: action.name,
                    email: action.email,
                    password: action.password,
                    role: action.role
                };
        case "GET_ACCOUNT":
            // Add new account
            return {
                ...state,
                items: action.payload
                }
        ;
        case "REMOVE_ACCOUNT":
            // Delete account
            return state.items.data.filter( accounts => accounts !== action.id);
        case "FETCH_ACCOUNT_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
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

const Reducers = combineReducers({
    accounts
    // Reducer lain yang mungkin kamu butuhkan
});

export default Reducers;
