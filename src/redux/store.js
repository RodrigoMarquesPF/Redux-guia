//import { applyMiddleware} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

//const store = createStore(rootReducer,applyMiddleware(logger));

const store = configureStore({
    reducer: rootReducer,
    //middleware: [logger],
});

export default store;