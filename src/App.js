import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weight />
      <Height />
      <DisplayBMI />
      <Reset />
    </div>
  );
}

function Weight() {
  return (
    <div>
      <h1>Weight: Xkg</h1>
      <input type="range" id="slider" name="slider" min="0" max="100" />
    </div>
  );
}

function Height() {
  return (
    <div>
      <h1>Height: Xcm</h1>
      <input type="range" id="slider" name="slider" min="0" max="100" />
    </div>
  );
}

function DisplayBMI() {
  return (
    <div>
      <h1>Your BMI is</h1>
      XXX
    </div>
  );
}

function Reset() {
  return;
}
