//usage of map
const details = [
    {name:'one',value:1},
    {name:'two',value:2},
    {name:'three',value:3},
    {name:'four',value:4}
]

// const newArr = details.map(function(detail){ return detail.name})
const newArr = details.map(detail => detail.name)  // same as above
console.log(newArr)



// usage of forEach
details.forEach((detail) => console.log(detail.name))


// usage of filter
const numbers = [1,2,3,4,5]

const evenNumbers = numbers.filter(function(number){ return number%2 === 0}) //filter even numbers. callback function should return true or false
console.log(evenNumbers)


// usage of reduce


const sum = numbers.reduce(function(accumulator, number){ return accumulator + number},0) // 0 is the initial value of accumulator
console.log(sum)