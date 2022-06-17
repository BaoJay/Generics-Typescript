// Code goes here!

//Create a function that will
function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}


const mergeObj = merge({name: 'Bao'}, {age:26});
console.log(mergeObj.name)
console.log(mergeObj.age)