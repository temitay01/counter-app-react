import "../styles/App.css";
import React, { Component, useState } from "react";
import Head from "./Head";
import AppButton from "./AppButton";

function CounterApp() {
  const [counter, setCounter] = useState(0);
  const handleIncrease = () => {
    setCounter((prevValue) => prevValue + 1);
   
  };
  const handleDecrese = () => {
    setCounter((prevValue) =>prevValue - 1);
  };
   
  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      <Head />
      <p>{counter}</p>
      <AppButton
        increase={handleIncrease}
        decrease={handleDecrese}
        reset={handleReset}
      />
    </div>
  );
}

export default CounterApp;
