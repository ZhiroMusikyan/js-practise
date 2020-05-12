const cityField = 'city';

const job = 'Frontend';

const person = {
    age: 21,
    name: 'Arshak',
    // job: job, //when Key and Value same, we can write like these;
    job,
    [cityField]: 'Gyumri',
    'oountry-live': 'Armenia',
    print: () => 'person',
    toString() {
        return Object
            .keys(this)
            .filter(key => key !== 'toString')
            .map(key => this[key])
            .join(' ')
    }
};

// console.log(person.toString());
// console.log(person.print());
// console.log(person);

// Methods
const first = {a: 1};
const second = {b: 1};

// console.log(Object.is(10, 20));
// console.log(Object.assign( {}, first, second));
const obj = Object.assign({}, first, second, {
    c: 2,
    b: 3
});
// console.log(obj);

console.log(Object.entries(obj));
console.log(Object.keys(obj));
console.log(Object.values(obj));
