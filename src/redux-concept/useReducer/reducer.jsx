// initilising reducerook as a react reducer hook
import React, { useReducer, useState } from "react";
const IncrementNumber = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState("");
  const incrementNum = () => setNum((prevState) => prevState + 1);
  const decrementNum = () => setNum((prevState) => prevState - 1);
  // declaring reducer actions
  const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    SET_NAME: "setName",
    SET_NUM: "setNum",
    ADD_TODO: "addTodo",
    REMOVE_TODO: "removeTodo",
    TOGGLE_TODO: "toggleTodo",
  };
  const { INCREMENT, DECREMENT, ADD_TODO, TOGGLE_TODO, REMOVE_TODO } = ACTIONS;
  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT:
        return { count: state.count + 1 };
        break;
      case DECREMENT:
        return { count: state.count };
      case ADD_TODO:
        return [...state, newTodo(action.payload.name)];
      case TOGGLE_TODO:
        return state.map((item) => {
          item?.id === action.payload.id
            ? { ...item, complete: !item.complete }
            : item;
        });
      case REMOVE_TODO:
        return state.filter((todo) => todo.id !== action.payload.id);
    }
  };

  function newTodo(name) {
    return { id: Date.now(), name: name, complete: false };
  }
  // TRYING OUT THE USErEDUUCER
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // calling the function
  dispatch({ type: DECREMENT });
  const incre = () => {
    dispatch({ type: INCREMENT });
  };
  const decre = () => {
    dispatch({ type: DECREMENT });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("number", num);
    data.append("amount", num);
    data.append("currency", currency);
    data.append("status", status);
    data.append("memo", memo);
    data.append("nonce", nonce);
    data.append("address", address);
    data.append("contractAddress", contractAddress);
    data.append("contractName", contractName);
    data.append("symbol", symbol);
    dispatch({ type: ADD_TODO, payload: { name: name } });
    setName("");
  };
  //
  return (
    <>
      <div>
        <button onClick={() => incrementNum()}>Increment Number</button>
        <button onClick={() => decrementNum()}>Decrement Number</button>
        <button onClick={incre}>Increment Number</button>
        <button onClick={decre}>Decrement Number</button>
        <p> {num}</p>
        <p> {state.count}</p>
      </div>
      <form action="">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </form>
      {state.map((todo, index) => (
        <div key={index}>
          <label style={{ color: todo?.complete ? "red" : "green" }}>
            {todo.name}
          </label>
          <p>{todo?.date}</p>
          <button
            onClick={dispatch({ type: TOGGLE_TODO, payload: { id: todo.id } })}
          >
            toggle
          </button>
          <button onClick={dispatch({ type: REMOVE_TODO })}>untoggle</button>
        </div>
      ))}
    </>
  );
};

export default IncrementNumber;
// completed simple number increment state application
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};
const { INCREMENT, DECREMENT } = ACTIONS;
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
      break;
    case DECREMENT:
      return { count: state.count };
  }
};
// T
