// function compute(a, b) {
//     return a + b;
// }
const defaultB = 30;
const defaultC = c => c * 2;

function compute(a, b = defaultC(a)) {
    return a + b;
}
console.log(compute(12));
