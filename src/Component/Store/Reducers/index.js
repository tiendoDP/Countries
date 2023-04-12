import { combineReducers } from "redux";
import CountriesReducer from "./countriesReducer";

const rootReducer = combineReducers({
    CountriesReducer,
})

export default rootReducer