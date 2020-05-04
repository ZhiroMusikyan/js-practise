//     function declaration

// function sum(a, b) {
//     return a + b;
// }
// function cub(a) {
//     return a ** 3;
// }


//      arrow function
// const sum = (a, b) => a + b;
// const cub = a => a ** 3;

// console.log(sum(4, 3));
// console.log(cub(3));


//   using arrow function on the setTimeout
// setTimeout(() => console.log('After 2 second'), 2000);


// Context
function log() {
    console.log(this);
}

const arrowLog = () => console.log(this);

const person = {
    name: 'Anna',
    age: 22,
    log: log,
    arrowLog: arrowLog,
    delayLog: function () {
        // const self = this;
        setTimeout( () => {
            console.log(this.name + ' ' + this.age)
        },500);
    }
};

// person.log();
// person.arrowLog()
//console.log(global);
person.delayLog();