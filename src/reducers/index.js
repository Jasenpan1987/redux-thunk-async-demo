import { combineReducers } from "redux";

import helloWorld from "./helloReducer";
import fetchJson from './jsonReducer';


const rootReducer = combineReducers({
    helloWorld,
    fetchJson
});

export default rootReducer;