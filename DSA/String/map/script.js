let prompt = require('prompt-sync')();

// let map = new Map();
// map.set('Name', "Salmon")
// map.set('age',  105)
// map.set('profession', 'Heavy - Driver')





// 1. Frequency Count 

// let arr = [1,1,2,3,4,5,4,4,5,6,8,6,];
// let map = new Map();

// for(let val of arr){
//     if(map.has(val)){
//         map.set(val, map.get(val) + 1)
//     }
//     else{
//         map.set(val, 1)
//     }
// }

// for(let [key,value] of map){
//     if(value >= 3){
//         console.log(key)
//     }
// }

// console.log(map)



// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************


// let arr = [2,7,11,15]
// arr.sort((a,b) => a - b)

// let target = 9;
// let map = new Map();

// for(let i = 0; i < arr.length; i++){
//     let diff = target - arr[i];

//     if(map.has(diff)){
//         // console.log(map.get(diff), i)
//     }

//     map.set(arr[i], i)
// }


// console.log(map.keys(2))

// names = ["Mary","John","Emma"]
// heights = [180,165,170]

// let ar = names.map((names, i) => [heights[i], names])
// ar = ar.sort((a,b) => b[0] - a[0])
// console.log(ar.map(block => block[1]))


let score = [[10,6,9,1],[7,5,11,2],[4,8,3,15]];
let k = 2;

score.sort((a,b) => b[k] - a[k])

console.log(score)