import changeTheNumber from "./updown";
import todoReducers from "./todoreducers";
import { combineReducers } from "redux";

const reducers = combineReducers(
    {
    //   myNumber:changeTheNumber
        changeTheNumber,
        todoReducers,
    }
);

export default reducers;