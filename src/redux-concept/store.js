import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { appsReducer, createPost } from ".";

// stores takes in two arguements
// APP REDUCER
// initial state

//let store = configureStore(reducer, initialstate);
/**
 * We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.

Redux Toolkit is our recommended approach for writing Redux logic today, including store setup, reducers, data fetching, and more.
 */
let store = configureStore(appsReducer);
console.log(store.getState());
// redux is a predictable state container for javascript applications
// access appliation state
// dispatch actions
// registr listeners

/// subscirbing to state changes
const unsubscribe = store.subscribe(() => {
  console.log("state changes ", store.getState());
});
// return a unsubcrided function which can be executed to to stop listening state updates

// dipatching actions
store.dispatch(createPost("dan", "hellos"));
