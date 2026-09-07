// memoization is an optimization technique that involves caching the results of expensive function calls and returning the cached result when the same 
// inputs occur again. It can significantly improve performance for functions that are called repeatedly with the same arguments.

function add(x){
    return 10 + x
}

const memo = (func) => {
    let cache={}
    return function(x){
        if(cache[x]){
            console.log('from cache')
            return cache[x]
        }else{
            console.log('calculating result')
            const result = func(x)
            cache[x] = result
            return result
        }

    }
}

const calculate = memo(add)

console.log(calculate(10)) // calculating result, 20
console.log(calculate(10)) // from cache, 20
// console.log(calculate(20)) // calculating result, 30
// console.log(calculate(20)) // from cache, 30