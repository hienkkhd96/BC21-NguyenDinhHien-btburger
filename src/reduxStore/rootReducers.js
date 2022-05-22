import { combineReducers } from "redux";
import { BurgerReducer } from "./burgerReducer";

export const rootReducers = combineReducers({
    BurgerReducer:BurgerReducer,
})