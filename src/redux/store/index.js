import { listsReducer } from "../reducers/listsReducer/reducer";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
    listsReducer,
});

const store = createStore(rootReducer);

export default store;

