import { fn, sum } from "@trash-oss/esm-package";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>This came from esm package</h1>

      <div>{sum(1, 2)}</div>
      <div>{fn()}</div>
    </div>
  );
}

export default App;
