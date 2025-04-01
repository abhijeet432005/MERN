let prompt = require("prompt-sync")()


// 1. Bubble sort 

// let arr = [1,4,3,2,9,10];

// for(let i = 0; i < arr.length - 1; i++){

//     for(let j = 0; j < arr.length - i - 1; j++){

//         if(arr[j] > arr[j + 1]){
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
    
// }
// console.log(arr)


// *******************************************************************************************************
// *******************************************************************************************************
// *******************************************************************************************************


// 2. Selection Sort

let arr = [1,4,3,2,9,10];

for(let i = 0; i < arr.length - 1; i++){
    let small = i;

    for(let j = i + 1; i < arr.length; j++){
        if(arr[small] > arr[j]){
            small = j;
        }
    }

    if(i != small){
        let temp = arr[i];
        arr[i] = arr[small];
        arr[small] = temp;
    }
}

console.log(arr);