import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weight />
      <Height />
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

function Reset() {
  return;
}
