import { combineReducers } from "redux";

export const postReducer = (state = [], acion) => {};
/**  An object whose values correspond to different reducer functions that need to be combined into one. One handy way to obtain it is to use ES6 import * as reducers syntax. The reducers may never return undefined for any action. Instead, they should return their initial state if the state passed to them was undefined, and the current state for any unrecognized action.


Turns an object whose values are different reducer functions, into a single reducer function. It will call every child reducer, and gather their results into a single state object, whose keys correspond to the keys of the passed reducer functions. */
export const appReducer = combineReducers({
  posts: postReducer,
  filter: fllterReducer,
});
