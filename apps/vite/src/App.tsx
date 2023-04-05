import { fn, sum } from '@trash-oss/esm-package';

// examples for if you dont support esm
const x = await import('@trash-oss/esm-package');

function App() {
  return (
    <div className="text-3xl font-bold underline text-red-400">
      <h1>This came from esm package</h1>

      <div>{sum(1, 2)}</div>
      <div>{fn()}</div>
      <div>{x.fn()}</div>
    </div>
  );
}

export default App;
