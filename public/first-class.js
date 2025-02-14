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





const numbers = [1,2,3,4,5]
numbers.forEach(function(number){
    console.log(number)
})

// const output = function(number){    
//     console.log(number)
// }

// above out function can be simplified as below
const output = number => console.log(number)

numbers.forEach(output)