let prompt = require("prompt-sync")()


// 1. create a dynamic array

// let size = Number(prompt("Enter the size "))
// let arr = new Array(size)

// for(let i = 0; i < arr.length; i++){
//     arr[i] = Number(prompt("Enter a element "));
// }

// console.log(arr);


// *******************************************************************************************************
// *******************************************************************************************************
// *******************************************************************************************************

// 2. Sum of array element


// let size = Number(prompt("Enter the size "))
// let arr = new Array(size);
// let sum = 0;

// for(let i = 0; i < arr.length; i++){
//     arr[i] = Number(prompt("Enter a element "));
//     sum += arr[i];

// }

// console.log(sum);



// *******************************************************************************************************
// *******************************************************************************************************
// *******************************************************************************************************

// 3. maximum element of array element

let arr = [10,3,6,80,40,5,60];

let max = arr[0];

for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }

}

console.log(max);
