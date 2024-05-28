
import { combineReducers } from "redux";
import counterReducer from "../counterreducer";
import todolistReducer from "./todolist.reducer";
import productsReducer from "./products.reducer";

const reducer=combineReducers({counterReducer,todolistReducer,productsReducer,productsReducer})
export default reducer 