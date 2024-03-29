import { combineReducers } from "redux";

//import { CREATE_POST } from "./actionTypes";
const CREATE_POST = "CREATE_POST";
const EDIT_POST = "EDIT_POST";
const SET_FILTER = "SET_FILTER";

export const createPost = { type: CREATE_POST, user: "dan", text: "new post" };
console.log(createPost);
// ES2015 use of arrow function
function producePost(user, text) {
  return {
    type: CREATE_POST,
    user: user,
    text: text,
  };
}

console.log(producePost("dan", "compiled code"));

const producePost1 = (user, text) => {
  {
    type: CREATE_POST, user, text;
  }
};

// implementing Rducers for redux application
const post = {
  posts: [
    { user: "wilson", category: "hello", text: "welcome to redux programming" },
  ],
  filter: "hello",
};
// postsreducer filterreducer and usersreduces
const editPost = (id, text) => {
  {
    type: EDIT_POST, id, text;
  }
};

// filterpost
const setFilter = (filter) => {
  {
    type: SET_FILTER, filter;
  }
};

// declaring the post reducers
// user this  const {type, ...post} = action
// const type = action.type const post = {user: action.user, category: action.category, text: action.text}
const postReducer = (state = [], action) => {
  switch (action?.type) {
    case CREATE_POST: {
      //const type  = action?.type
      const { type, ...post } = action;
      return [...state, post];
      // use can also use the Array.prototype.concat()  which merges two arrays and returns a new one
      // return state.concat([post])
    }
    // handling edit post
    case EDIT_POST: {
      // renaming propertiees and multiple desstructuring
      // const { type: actionType, user = "wilson" } = action;
      return state.map((oldpost, index) =>
        action?.id === index ? { ...oldpost, ...newpost } : oldpost
      );
    }
    case SET_FILTER: {
    }
  }
};
// testing out our reducer

const initialState = [];
// define action using the initial create Post
const action = producePost(
  "wilson",
  "coding is sweet because it teaches you how to think"
);

// finally we will execute the reducer and log the result
const newState = postReducer(initialState, action);
console.log(newState);
// created store initialised state function  created reducers function and tested the reducers
// the filter reducer function
const filterReducer = (state = "all", action) => {
  action.type === SET_FILTER ? action.filter : state;
};
// combining the reducers with app or root function
function appReducer(state = {}, action) {
  return {
    posts: postReducer(state.posts, action),
    filter: filterReducer(state.filter, action),
  };
}
// defualt outputs reduc/init state, and an undefind action
export const appsReducer = combineReducers({
  posts: postReducer,
  filter: filterReducer,
});

let state = appsReducer(undefined, { type: "INIT_ACTION" });
console.log("====================================");
console.log("state", state);
console.log("====================================");

state = appsReducer(state, createPost("wilson", "test"));
console.log(state);

// redux is a predictable state container for javascript applications
// access appliation state
// dispatch actions
// registr listeners
