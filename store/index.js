import { createStore } from "redux";
import counterReducer from "./counter.js";

const initialState = {};

const store = createStore(counterReducer);

export default store;
