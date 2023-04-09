import { getString } from './util/index.js';

export const sum = (a: number, b: number) => a + b;

export const fn = () => {
  const x = getString();
  return x + '12';
};
