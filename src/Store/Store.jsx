import { createStore } from 'redux';
import { reducer } from "./StoreReducers/StoreReducers";

const store = createStore(reducer)

export default store;