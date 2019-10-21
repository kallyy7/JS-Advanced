const f = (function () {
    console.log('iife');

    return () => {
        console.log('iife again');
    }
})()

function func() {
    console.log('normal function');

    return () => {
        console.log('normal function again');
    }
}

f();
func();
func();