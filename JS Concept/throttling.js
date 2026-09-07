// throttling is a technique used to limit the number of times a function can be called over time. It is often used in scenarios where a function is 
// called repeatedly, such as during window resizing or scrolling events, to improve performance and prevent excessive function calls.

// The throttle function takes two arguments: the function to be throttled and the delay time in milliseconds. It returns a new function that, 
// when invoked, will only call the original function at most once every specified delay time.


function throttle(func, delay=1000) {
    let timerId = null
    return function(...args){
        if(timerId) return
        timerId = setTimeout(() => {
            timerId = null
            func.apply(this, args)
        }, delay)
    }
}