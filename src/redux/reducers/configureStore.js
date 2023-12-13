import { createStore, applyMiddleware } from "redux";
import rootReducer from "./index";
import {thunk} from "redux-thunk";//rootReducer iceren bir store olusturma
export default function configureStore() {
    return createStore(rootReducer, applyMiddleware(thunk));
}