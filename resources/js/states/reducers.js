import { combineReducers } from "redux";

function accounts(state = [], action) {
    switch (action.type) {
        case "ADD_ACCOUNT":
            // Add new account
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    phone: action.phone
                }
            ];
        case "REMOVE_ACCOUNT":
            // Delete account
            return state.filter(accounts => accounts.id !== action.id);
        default:
            return state;
    }
}

const Reducers = combineReducers({
    accounts
    // Reducer lain yang mungkin kamu butuhkan
});

export default Reducers;
