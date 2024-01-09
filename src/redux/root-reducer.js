import { combineReducers } from "redux";

//import userReducer from "./user/reducer";
import cartReducer from "./cart/slice";
import userReducer from "./user/slice";

const rootReducer = combineReducers ({userReducer, cartReducer});

export default rootReducer;