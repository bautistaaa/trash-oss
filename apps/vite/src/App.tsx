import { fn, sum } from "@trash-oss/esm-package";
import "./App.css";

// examples for if you dont support esm
const x = await import("@trash-oss/esm-package");

function App() {
  return (
    <div className="App">
      <h1>This came from esm package</h1>

      <div>{sum(1, 2)}</div>
      <div>{fn()}</div>
      <div>{x.fn()}</div>
    </div>
  );
}

export default App;
