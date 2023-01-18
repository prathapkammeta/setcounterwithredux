import React from "react";
import { useSelector } from "react-redux";

export const Header = () => {
  const counter = useSelector((state) => state.counter);
  console.log("renderizou");

  return (
    <>
      <h1>Welcome to my counter!</h1>
      <h2>The count is: {counter.count}</h2>
    </>
  );
};
