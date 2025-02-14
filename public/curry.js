
const add = function(x) {
    return function(y) {
        return x + y
    }
}
// const sum3 = add(3)
console.log(add(3)(4))


function multiply(x){
    return function(y){
        return x*y
    }
}
const multiplyBy3 = multiply(3)
console.log(multiplyBy3(4))


const multy = x => y => x*y
const multyBy = multy(3)(4)
console.log(multyBy)


const greet = salutation => name => `${salutation} ${name}`
console.log(greet('Hello')('John'))