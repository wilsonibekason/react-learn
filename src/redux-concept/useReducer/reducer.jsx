// initilising reducerook as a react reducer hook
import React, { useReducer, useState } from "react";
const IncrementNumber = () => {
  const [num, setNum] = useState();
  const incrementNum = () => setNum((prevState) => prevState + 1);
  const decrementNum = () => setNum((prevState) => prevState - 1);
  return (
    <>
      <div>
        <button onClick={() => incrementNum()}>Increment Number</button>
        <button onClick={() => decrementNum()}>Decrement Number</button>
        <p> {num}</p>
      </div>
    </>
  );
};

export default IncrementNumber;
// completed simple number increment state application
