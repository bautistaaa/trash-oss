import { Button } from '@trash-oss/ui/foo';
import { Button2 } from '@trash-oss/ui/bar';
import { sum } from '@trash-oss/common';

export default function Web() {
  const x = sum(1, 2);
  return (
    <div className="font-bold text-red-400">
      <h1>Web {x}</h1>
      <Button />
      <Button2 />
    </div>
  );
}
