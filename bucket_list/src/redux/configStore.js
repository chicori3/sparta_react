import { createStore, combineReducers } from "redux";
import bucket from "./modules/bucket";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

// reducer 합치기 (단일 스토어)
const rootReducer = combineReducers({ bucket });

const store = createStore(rootReducer);

export default store;
