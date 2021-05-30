    import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form";
import authReducer from "./Reducers/authReducer";
import thunkMiddleware from "redux-thunk";
let reducers = combineReducers({
    form: formReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store;
export default store;