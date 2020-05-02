// Number
let number = 2;
let number1 = 2.3;
//Infinity, -Infinity and NaN  numbers;

console.log(typeof NaN);  //'number'
console.log(typeof -Infinity);  //'number'
console.log(typeof Infinity);  //'number'
console.log(typeof number);  //'number'
console.log(typeof number1);  //'number
console.log('Hello' / 2); //NaN

// BigInt
let n = 1234567890123456789012345678901234567890n;
console.log(n); //1234567890123456789012345678901234567890n
console.log(typeof n); //'bigint

let n = 1234567890123456789012345678901234567890; // without n!
console.log(n); // 1.2345678901234568e+39
console.log(typeof n); //'number'

//String
let str = 'Hello word';
let str1 = `such pigtails we
    can write more than
     one line of text`;

console.log(str); //'string'
console.log(str1); //'string'

