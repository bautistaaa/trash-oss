import { useEffect, useState } from 'react';

export const Button2 = () => {
  const [state, setState] = useState(0);
  useEffect(() => {
    console.log(state);
  }, []);
  return <button>Boop</button>;
};
