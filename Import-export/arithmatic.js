function sum(a,b) {
    return a+b
}

function multiply(a,b) {
    return a*b
}

// const divide = (a,b) => a/b

export const divide = (a,b) => a/b
export const substract = (a,b) => a-b
// export default sum; multiply
// export default multiply


// here this wont work becasue for "default" export only takes one value i.e sum and noo multiply
// to solve this we use:

export  {sum, multiply}
