import React from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  setCounter
} from "./actions/counterActions";
import { Header } from "./Header";

export default function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Header />
      <p>
        <button onClick={() => dispatch(incrementCounter())}>INCREMENT</button>
      </p>

      <p>
        <button onClick={() => dispatch(decrementCounter())}>DECREMENT</button>
      </p>

      <p>
        <button onClick={() => dispatch(setCounter(5))}>Set to 5!</button>
      </p>
    </div>
  );
}
