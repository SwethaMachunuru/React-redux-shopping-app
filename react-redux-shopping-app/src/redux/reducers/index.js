import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
    allProductsReducer: productReducer,
    product: selectedProductReducer
});

export default reducers;