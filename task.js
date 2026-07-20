//callback
function callbackFn(fn) {
    console.log("I know you are calling...");

    fn();
}

function sayHi() {
    console.log("Hey buddy..");

}

callbackFn(sayHi);