window.onload = main;

function main() {
    for (let i = 0; i <; i++) {
        let s;
    }

    debugger
    let date = new Date();
    let date1 = date.startOfMonth();
    let r = document.getElementById('btn');
    r.addEventListener("click", () => {
        alert(date1)
    });

    console.log('hello');
    console.log(date);
    console.log(date1);
    f()

    getStr( '*', '1', 'b', '1c')
}
function getStr() {
    return [].slice.call(arguments, 1).join(arguments[0])

}

debugger




a()

let a = function () {
    console.log('a');
}
let date = new Date();
let date1 = date.startOfMonth();
Date.prototype.startOfMonth = function() {
    const mm = this.getMonth();
    const dd  = '01';
    return new Date(this.getFullYear(),
        mm,
        dd
    )
};
function f() {
    alert('a')
}