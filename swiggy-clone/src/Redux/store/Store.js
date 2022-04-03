
import { createStore, combineReducers } from "redux";
import { restReducer } from "../Restaurant/reducer";
import { loginReducer } from "../User/reducer";

const rootReducer = combineReducers({
    restaurant : restReducer,
    login : loginReducer
})

export const store = createStore(rootReducer);





