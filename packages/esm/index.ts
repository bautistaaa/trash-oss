import { getString } from './util';

export const sum = (a: number, b: number) => a + b;

export const fn = () => {
  const x = getString();
  return x + '12';
};
