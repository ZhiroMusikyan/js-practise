// Rest
function average(a, b,...args) {
    debugger
    return args.reduce((acc, i) => acc += i, 0) / args.length;
}

// console.log(average(10, 20, 30, 40, 50));

//Spread
// const array = [1, 2, 3, 5, 8, 13];
// console.log(...array);
// console.log(Math.max(...array));
// console.log(Math.min(...array));
//Without Spread
// console.log(Math.max.apply(null, array));

// const fib =[1, ...array];
// console.log(fib);

//Destructuring
const array = [1, undefined, 3, 5, 8, 13];

// const a = array[0];
// const b = array[1];
// const [a, b = 21, ...c] = array;
// console.log(a, b, c);

// const [a,, c] = array;
// console.log(a, c);

//Object
const address = {
    country: 'Armenia',
    city: 'Yerevan',
    // street: 'Mashtoc',
    concat: function () {
        return `${this.country}, ${this.city}, ${this.street}`
    }
};


// const {country, street = 'Kievyan', city, concat: addressConcat} = address;
// console.log(country, street);
// console.log(addressConcat.call(address));

// const {city, ...rest} = address;
// console.log(city);
// console.log(rest);

const newAddress = {...address, street: 'Arshakunyac', code: 123};
console.log({newAddress});

// console.log(address.concat());