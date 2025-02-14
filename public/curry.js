
const add = function(x) {
    return function(y) {
        return x + y
    }
}

const sum3 = add(3)
console.log(sum3(4))


function multiply(x){
    return function(y){
        return x*y
    }
}
const multiplyBy = multiply(3)(4)
console.log(multiplyBy)


const multy = x => y => x*y
const multyBy = multy(3)(4)
console.log(multyBy)
