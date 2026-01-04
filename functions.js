//functions
show();
show('Amit');


function show(name = 'Rahul') {
    console.log(`Hello, ${name}`);

}

//closures
function counter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    }
}

let ans = counter();
ans();
ans();
ans();
ans();

const inc = counter();
inc();
inc();
inc();
inc();

//first class functions
function shout(msg) {
    return msg.toUpperCase();
}
function processMessage(fn) {
    console.log(fn("hello"));
}

processMessage(shout);

let upper=shout("Rahul jadhav");
console.log(upper);

//high order functions
function high(val1){
    return function (val2){
        return val1*val2;
    }
}

let hhh=high(5);
console.log(hhh(6));



