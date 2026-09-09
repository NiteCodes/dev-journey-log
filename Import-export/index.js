import {v4} from 'uuid'

console.log(v4())

// import sum from './arithmatic.js'
// import multiply from  './arithmatic.js'


// console.log("sum of a+b=",sum(20,10))
// console.log("product of a*b=",multiply(20,10))

// it gives : since its only taking one funtion ie sum
// sum of a+b= 30
// product of a*b= 30


import {sum,multiply,divide, substract} from './arithmatic.js'
import myName from './name.js'

console.log("sum of a+b=",sum(20,10))
console.log("product of a*b=",multiply(20,10))
console.log("division of a/b=",divide(10,5))
console.log('substaction of a-b=',substract(3,20))
console.log(myName('Nitesh Prajapati'))
// sum of a+b= 30
// product of a*b= 200


