import { fn, sum } from '@trash-oss/esm-package';
import { myFunction } from './utils/index.js';

console.log(sum(1, 2), 'should be 69');
console.log(fn(), 'should be 69');
console.log(myFunction());
