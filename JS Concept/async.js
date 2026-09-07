// let url = 'https://jsonplaceholder.typicode.com/todos/1'

// async function getData(){
//     try{
//         const result = await fetch(url)
//         const data = await result.json()
//         console.log(data)
//     }catch(err){
//         console.log(err)
//     }
// }

// getData()

// // async function always return a promise

// function bigWork(){
//     // lots of work
//     return getData()
// }

// (async function(){
//     console.log('start')
//     const res = await bigWork()
//     console.log('end') 
// })()


// // javascript is a single threaded language, but it can handle asynchronous operations using event loop and promises.

// const processOrder = (customer)  => {
//     console.log(`Processing order for customer 1`)
//     var currentTime = new Date().getTime();
//     while (currentTime + 3000 >= new Date().getTime()) {
//         // do nothing for 3 seconds
//     }
//     console.log(`Order processed for customer1`) 
// }

// console.log(`Take order for customer 1`)
// processOrder()
// console.log(`Completed Order for customer 1`)

 // Browser - 2 part - runtime and engine
 // engine - 2 part - callstack and heap 
 // runtime - 3 part - Web API, callback queue and event loop
 // render queue
 // microtask queue - promise, mutation observer
 // event loop priotize microtask queue over callback queue. If there is any task in the microtask queue, it will execute that first before executing the task in the callback queue.


// const processOrder = (customer)  => {
//     console.log(`Processing order for customer 1`)
//     var currentTime = new Date().getTime();
//     setTimeout(() => {}, 3000)
//     console.log(`Order processed for customer1`) 
// }

// console.log(`Take order for customer 1`)
// processOrder()
// console.log(`Completed Order for customer 1`)

// async function will go to the Web API and then it will go to the callback queue and then it will go to the event loop and then it will go to the call stack.
// async function will wait in the Web API, when the time is up then it will send that function into the callback queue.
// Event loop will check if the call stack is empty, if it is empty then it will take the function from the callback queue and push it into the call stack.

// const takeOrder = (customer, callback) => {
//     console.log(`Take order for customer ${customer}`)
//     callback(customer)
// }

// const processOrder = (customer, callback) => {
//     console.log(`Processing order for customer ${customer}`)
//     setTimeout(() => {
//         console.log(`Order processed for customer ${customer}`)
//         callback(customer)
//     }, 3000)    
// }

// const completeOrder = (customer) => {
//     console.log(`Completed order for customer ${customer}`)
// }

// takeOrder('Faisal', (customer) =>{
//     processOrder(customer, (customer)=>{
//         completeOrder(customer)
//     })
// })

// takeOrder('Parsa', (customer) =>{
//     processOrder(customer, (customer)=>{
//         completeOrder(customer)
//     })
// })

// the issue is if there are more task nest callbacks will be created and it will be hard to read and maintain the code. This is called callback hell. To avoid this we can use promises and async/await.

// const hasMeeting = false;

// const meeting = new Promise((resolve, reject) => {
//     if(!hasMeeting){
//         resolve('Meeting scheduled')
//     } else {
//         reject('Meeting cancelled')
//     }
// })

// // meeting.then((res) => {
// //     console.log(res)
// // }).catch((err) => {
// //     console.log(err)
// // })

// // const addToCalendar = (meeting) => {
// //     const calendar = `${meeting} has been added to your calendar`
// //     return Promise.resolve(calendar)
// // }


// // meeting.then((res) => {
// //     return addToCalendar(res)
// // }).then((calendar) => {
// //     console.log(calendar)
// // }).catch((err) => {
// //     console.log(err)
// // })

// async function myMeeting(){
//     try{
//         const meetingDetail = await meeting
//         const calendar = await addToCalendar(meetingDetail)
//         console.log(calendar)
//     }catch(err){
//         console.log(err)
//     }
// }

// myMeeting()

// const promise1 = Promise.resolve('Promise 1 resolved')
// const promise2 = Promise.resolve('Promise 2 resolved')
// const promise3 = Promise.resolve('Promise 3 resolved')

// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise 4 resolved')
//     }, 3000)
// })

// Promise.all([promise1, promise2, promise3, promise4]).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

// // after finishing all the promises, it will return the result in an array. If any of the promise is rejected, it will return the error.

// Promise.race([promise1, promise2, promise3, promise4]).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

// // after finishing the first promise, it will return the result. If any of the promise is rejected, it will return the error.


// async function friendlyFunction(){
//     return "Hello"
// }

// function friendlyFunction1(){
//     return Promise.resolve("Hello")
// }

// console.log(friendlyFunction())




const secondFunction = () => {
    console.log("Second Function")
}

const thirdFunction = () => {
    console.log("Third Function")
}

const firstFunction = () => {
    console.log("First Function")
    setTimeout(secondFunction, 2000)
    new Promise((resolve, reject) => {
        console.log("Promise Executed")
        resolve()
    }).then(thirdFunction)
}

firstFunction()