//usage of map
const details = [
    {name:'one',value:1},
    {name:'two',value:2},
    {name:'three',value:3},
    {name:'four',value:4}
]

const newArr = details.map((detail,index)=>detail.name)
console.log(newArr)



// usage of forEach
details.forEach((detail) => console.log(detail.name))


// usage of filter