import {applyMiddleware, createStore} from "redux";
import {combineReducers} from "redux";
import homeReducer from "./home-reducer";
import {composeWithDevTools} from "@redux-devtools/extension";

let reducers = combineReducers({
    home: homeReducer,
})

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware()
    )
);

store.subscribe(()=> {
    localStorage["redux-store"] = JSON.stringify(store.getState().home);
})

export default store;


