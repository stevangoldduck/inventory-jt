import { combineReducers } from "redux";
import {accounts} from "./reducers/account_reducer";
import {products , editProduct} from "./reducers/product_reducer";
import {stockProduct} from "./reducers/store_reducer";
import {reducer as toastrReducer} from 'react-redux-toastr'
import {warehouseProduct} from './reducers/warehouse_reducer';
import {productCategory} from './reducers/product_category_reducer';
import {dashboard} from './reducers/dashboard_reducer';

const Reducers = combineReducers({
    accounts,
    products,
    stockProduct,
    editProduct,
    warehouseProduct,
    productCategory,
    dashboard,
    toastr: toastrReducer
});

export default Reducers;
