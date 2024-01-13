import { applyMiddleware, createStore } from "redux";
import { loremReducer } from "./reducers/loremReducer";
import { thunk } from "redux-thunk";

const store=createStore(loremReducer,applyMiddleware(thunk))
export default store