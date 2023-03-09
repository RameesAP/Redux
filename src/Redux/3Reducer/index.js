import { combineReducers } from "redux";

import counterReducer from "./counter";
import loggedReducer from "./isLogged";




export const  reducers= combineReducers({counterReducer,loggedReducer})