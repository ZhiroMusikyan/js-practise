// import
import {one, two} from './module.js'
import loger, {COLOR, compute} from "./module.js";

//rename import
import {one as num1, two as num2} from './module';

//one import
import * as numbers from './module.js';

console.log(COLOR);
let res = compute(1, 2);
console.log(res);

loger.log();