// const title = 'Hello';
//
// const isVisible = () => Math.random() > 0.5;
//
// //before
// // const templateB = '<h1>'+ title + '</h1>';
// // ES6 `${}`
// const template = `
//     ${isVisible() ? '<p>Visible</p>' : 'F'}
//     <h1 id='demo' style color="red">${title}</h1>
//   `;
//
// console.log(template);

// Methods for strings ES6
const str = ' Hello ';
console.log(str.startsWith('He'));
console.log(str.startsWith('he'));
console.log(str.endsWith('lo'));
console.log(str.startsWith('Lo'));

console.log(str.includes('llo'));

console.log(str.repeat(3));

console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());
console.log(str.length);
console.log(str.padStart(10, 'arar'));
console.log(str. padEnd(40, 'arar'));
console.log(str.length);
