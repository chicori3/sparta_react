import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import bucket from "./modules/bucket";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

// 미들웨어는 배열로
const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
// reducer 합치기 (단일 스토어)
const rootReducer = combineReducers({ bucket });

const store = createStore(rootReducer, enhancer);

export default store;
