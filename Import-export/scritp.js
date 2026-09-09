// const obj = {
//     a: 'a',
//     b: 'b',
//     c:{
//         d: 'd'
//     }
// }

// const { cacheSignal } = require("react")

// const { cacheSignal } = require("react")

// console.log(obj)


// const shallow = {...obj}

// shallow.b = "this is shallow"
// shallow.c.d = "this is d"

// console.log(shallow);
// console.log(obj)




// ~~~~~~~~~~~~~~~~~~~~~~curring~~~~~~~~~~~~~~~



// function abc(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// console.log("a+b+c =",abc(1)(2)(3))




//~~~~~~~~~~~~~~~~~~~~~~callback hell simple example~~~~~~~~~~~


// const bakeBread = (statement, cb) => {
//     setTimeout (() =>
//         console.log(statement), 3000);
//     cb();
// }

// const stuffing  = (statement, cb) => {
//         setTimeout (() =>
//         console.log(statement), 3000);
//     cb();
// }

// const grilled = (statement, cb) => {
//         setTimeout (() =>
//         console.log(statement), 3000);
//     cb();
// }

// bakeBread('bread is being baked', () => {
//     stuffing('stuffing is being added', () => {
//         grilled('sandwitch is being grilled', () => {
//             console.log('sandwich is ready to eat!!!');
//         })
//     })
// })

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// The issue in your code is that you’re calling the callback (cb()) 
// immediately after starting the setTimeout, instead of waiting for 
// the asynchronous work (the console.log) to finish.
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// const bakeBread = (statement, cb) => {
//     setTimeout (() => {
//         console.log(statement),
//             cb();
//         }, 3000 )
// }

// const stuffing  = (statement, cb) => {
//         setTimeout (() => {
//         console.log(statement),
//             cb();
//         }, 3000 )
// }

// const grilled = (statement, cb) => {
//         setTimeout (() => {
//         console.log(statement),
//             cb();
//         }, 3000 )
// }


// bakeBread('bread is being baked', () => {
//     stuffing('stuffing is being added', () => {
//         grilled('sandwitch is being grilled', () => {
//             console.log('sandwich is ready to eat!!!');
//         })
//     })
// })





// ~~~~~~~~~~~~~~~~promise~~~~~~~~~~~~~~~~~~~~~

// const promise = new Promise((resolve, reject) => {
//     const x = 4
//     if (x===4)
//         resolve('resolved')
//     else reject('reject')
// })


// promise
// .then(() => console.log("working fine"))
// .catch(() => console.log('something went wrong'))

// // ~~~~~~~~~~~promise can also be caught with response ~~~~~~~~~~~~~~

// promise
// .then((Response) => console.log(Response))
// .catch((err) => console.log(err))



// ~~~~~~~~~~~~~~~~~~~~~~applying promise~~~~~~~~~~~~~~~~~

// const bakeBread = (statement) => {
//     return new Promise((resolve) => {

//         setTimeout (() => {
//             console.log(statement),
//                 resolve()

//         }, 3000)
//     })
// }


// const stuffing  = (statement) => {
//         return new Promise((resolve) => {

//     setTimeout (() => {
//             console.log(statement),
//                 resolve()

//         }, 3000)
//     })
// }

// const grilled = (statement) => {
//         return new Promise((resolve) => {

//     setTimeout (() => {
//             console.log(statement),
//                 resolve()

//                 console.log("ready to eat");

//         }, 3000)
        
//     })
// }

// bakeBread('bread is being baked', () => {
//     stuffing('stuffing is being added', () => {
//         grilled('sandwitch is being grilled', () => {
//             console.log('sandwich is ready to eat!!!');
//         })
//     })
// })


// ~~~~~~~~~~.then method~~~~~~~~~~~~~~~~~~~~~~

// bakeBread('beard is baking')
// .then(() =>stuffing('stuffing is done'))
// .then(() =>grilled('grilling is done'))
// .catch(() => console.log("something went wrong"));



// ~~~~~~~~~~~~~~~~~~~Async/await method~~~~~~~~~~~~~~


// async function makeMeal() {
//     try {
//         await bakeBread('beard is baking')
//         await stuffing('stuffing is done')
//         await grilled('grilling is done')
//     } catch (err) {
//         console.log("something went wrong")
//     }
// } makeMeal();



// ~~~~~~~~~~~~~~~~~~~~~Run all tasks at the same time (concurrency)~~~~~~~~~~~~~~

// async function makeMealParallel() {
//     try {
//         await Promise.all([
//             bakeBread("bread is baking"),
//             stuffing("stuffing is done"),
//             grilled("grilling is done")
//         ]);
//         console.log("🍽️ Meal is ready!");
//     } catch (error) {
//         console.log("something went wrong", error);
//     }
// }

// makeMealParallel();




