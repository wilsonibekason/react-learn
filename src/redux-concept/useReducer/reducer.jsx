// initilising reducerook as a react reducer hook
import React, { useReducer, useState } from "react";
const IncrementNumber = () => {
  const [num, setNum] = useState();
  const incrementNum = () => setNum((prevState) => prevState + 1);
  const decrementNum = () => setNum((prevState) => prevState - 1);
  // declaring reducer actions
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
    </>
  );
};

export default IncrementNumber;
// completed simple number increment state application
