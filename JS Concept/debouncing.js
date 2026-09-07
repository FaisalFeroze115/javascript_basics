// debounce is a function that limits the rate at which a function can fire. It ensures that the function is only called after a 
// certain amount of time has passed since the last time it was invoked. This is useful for scenarios like handling user input events, 
// where you want to avoid calling a function too frequently.

// debounce function takes two arguments: the function to be debounced and the delay time in milliseconds. It returns a new function that, 
// when invoked, will only call the original function after the specified delay time has passed since the last invocation.

// function debounce(func, delay) {
//     let timeoutId;
//     return function(...args) {
//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(() => {
//             func.apply(this, args);
//         }, delay);
//     };
// }

// // Example usage of debounce function
// const handleResize = () => {
//     console.log('Window resized');
// };

// const debouncedResize = debounce(handleResize, 200);

// window.addEventListener('resize', debouncedResize); 

// example 2, basic debounce function 

function debounce(func, delay) {
    let timeoutId;
    return function(){
        if(timeoutId){
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            func()
        }, delay)
    }
}  


// trottle 
// example of throttle function, which limits the rate at which a function can fire. It ensures that the function is only called at most once
// window resizing event, where you want to avoid calling a function too frequently.
// mouse move event, where you want to avoid calling a function too frequently.

// function throttle(func, delay=1000) {
//     let timerId = null
//     return function(...args){
//         if(timerId) return
//         timerId = setTimeout(() => {
//             timerId = null
//             func.apply(this, args)
//         }, delay)
//     }
// }

function trottleFunction(cb, delay=1000){ 
    let shouldWait = false
    let waitingArgs = null

    const timeoutFunc = () => {
        if(waitingArgs === null){
            shouldWait = false
        }else{
            cb(...waitingArgs)
            waitingArgs = null
            setTimeout(timeoutFunc, delay)
        }
    }

    return function(...args){
        if(shouldWait){
            waitingArgs = args
            return
        }
        cb(...args)
        shouldWait = true
        setTimeout(timeoutFunc, delay)
    }
}
// trottle will first call the call back function, then after the delay time, it will check if there are any waiting arguments. If there are, 
// it will call the callback function with those arguments and reset the waiting arguments to null. If there are no waiting arguments, 
// it will set shouldWait to false, allowing the next invocation to call the callback function immediately.
 