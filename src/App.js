import { useState } from "react";
import "./App.css";

export default function App() {
  const [weight, setWeight] = useState(40);
  const [height, setHeight] = useState(140);

  return (
    <div className="App">
      <Weight weight={weight} setWeight={setWeight} />
      <Height height={height} setHeight={setHeight} />
      <DisplayBMI />
      <Reset />
    </div>
  );
}

function Weight({ weight, setWeight }) {
  return (
    <div>
      <h1>Weight: {weight}kg</h1>
      <input
        type="range"
        id="slider"
        name="slider"
        min="40"
        max="220"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
    </div>
  );
}

function Height({ height, setHeight }) {
  return (
    <div>
      <h1>Height: {height}cm</h1>
      <input
        type="range"
        id="slider"
        name="slider"
        min="140"
        max="220"
        onChange={(e) => setHeight(e.target.value)}
      />
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
