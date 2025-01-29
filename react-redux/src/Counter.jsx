import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  getCounter,
  getDoubleCounter,
  increment,
} from "./counterSlice";

export default function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const doubleCounter = useSelector(getDoubleCounter);
  const tripleCounter = useSelector((state) => getCounter(state, 3));

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  function handleIncrementDouble() {
    dispatch(increment(2));
  }

  function handleDecrementDouble() {
    dispatch(decrement(2));
  }
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <h1>Double Counter: {doubleCounter}</h1>
      <h1>Triple Counter: {tripleCounter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleIncrementDouble}>Increment Double</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleDecrementDouble}>Decrement Double</button>
    </div>
  );
}
