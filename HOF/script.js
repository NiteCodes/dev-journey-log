console.log("11/08/2026~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")


//````````````````````````````````````````````````` Higer-order function `````````````````````````````````````````````` //

// // // Higer-order function: first def: a function 

// // // takes another funtion as an argument

// // const sayHi = (name, callback)=>{
// //     name(callback);
// // }

// // // Higer-order function: second def: a function returns another function


// const outerFunc = (a) => {
//     //  return function (b){
//     function innerFunc (b){
//         return a+b
//     }
//     return innerFunc
// }
// console.log(outerFunc(1)(2))


// or


// const outerFunc = (a) => {
//      return function (b){
//         return a+b
//     }
// }
// console.log(outerFunc(1)(2))


//````````````````````````````````````````````````` call back fucntion `````````````````````````````````````````````` //


// const greet = (callback) => console.log(`Hi ${callback}`);
// callback = 'Nitesh';
// sayHi (greet,callback);


// here name is a funtion that is stored as an argumet inside sayHi fuction
// sayHi is a variable that stores a fuction 


const arr = [4,1,2,5,3,6,9,0,8,10];
console.log("Array length:", arr.length);

for (let i = 0; i < arr.length; i++){
    console.log(arr[i], "is at index", i);
}
const mappedArr = arr.map((i) => i)
console.log("Mapped Array:",mappedArr);












