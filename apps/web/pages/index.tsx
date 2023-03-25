import { Button } from "ui/foo";
import { Button2 } from "ui/bar";
import { sum } from "common";

export default function Web() {
  const x = sum(1, 2);
  return (
    <div>
      <h1>Web {x}</h1>
      <Button />
      <Button2 />
    </div>
  );
}
