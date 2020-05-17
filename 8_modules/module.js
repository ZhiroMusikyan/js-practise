// export variables
export let one = 1;
let two = 2;
let three = 3;
// export {two};
export {two, three};

//export class..
export class Person {
    constructor(name) {
        this.name = name;
    }
}

//export function..
export function sayHello() {
    console.log('hello');
}

// or
export {Person, sayHello};

//rename exporting variable

export {one as Once, two as twice};

const privateVariable = 2;

export const COLOR = '*bababa';

export function compute(a, b) {
    return a + b;
}

export default {
    log() {
        console.log(privateVariable);
    }
}