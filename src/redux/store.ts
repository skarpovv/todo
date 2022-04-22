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

export default store;


