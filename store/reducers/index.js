import {combineReducers} from "redux";
import {modalReducer} from "./modalReducer";
import {workReducer} from "./workReducer";

export const rootReducer = combineReducers({
  modal:modalReducer,
  works:workReducer
});
