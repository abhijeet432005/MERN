let arr = [
    {
        name: 'Abhi',
        age: 20
    },
    {
        name: 'Salmon',
        age: 40
    },
    {
        name: 'Rocky',
        age: 35
    }

]
let sum = 0

arr.forEach(function(val){
    sum = val.age + sum;
    
})
console.log(sum)