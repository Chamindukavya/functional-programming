// function add(x,y){
//     return x+y
// }

// const sum = add(3,4)
// console.log(sum) 

const add = function(x,y){
    return x+y
}
const sum = add(3,4) 
console.log(sum)

const greet = function(salutation){
    return function(name){
        return `${salutation} ${name}`
    }
}

const hello = greet('Hello')

const message = hello('John')

console.log(message)