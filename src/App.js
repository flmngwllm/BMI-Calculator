import { useState } from "react";
import "./App.css";

export default function App() {
  const [weight, setWeight] = useState(40);
  const [height, setHeight] = useState(140);

  return (
    <div className="App">
      <Weight weight={weight} setWeight={setWeight} />
      <Height />
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
