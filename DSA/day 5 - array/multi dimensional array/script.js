const prompt = require('prompt-sync')();


// 1. 2-D array 

// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         process.stdout.write(`${arr[i][j]} `);
//     }
//     console.log();
// }

// **************************************************************************************************
// **************************************************************************************************

// 2. Dyanamic 2D array 


// let inner = Number(prompt("Enter the array size "));
// let innerArraySize = Number(prompt("Enter the inner array size "));
// let arr = new Array(inner);

// for(let i = 0; i < arr.length; i++){
//     arr[i] = new Array(innerArraySize);
// }
// // [ [ , , ], [ , , ], [ , , ] ]

// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         arr[i][j] = Number(prompt("Enter the element "));
//     }
// }

// console.log(arr)



// *******************************************************************************************************
// *******************************************************************************************************
// *******************************************************************************************************

// 3. 3d Array


// let arr = [
//     [[1,2,3] , [4,5,6]],
//     [[7,8,9] , [10,11,12]],
//     [[13,14,15] , [16,17,18]]
// ]

// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         for(let k = 0; k < arr[i][j].length; k++){
//             process.stdout.write(`${arr[i][j][k]} `);
//         }
//     }
//     console.log()
// }



// ******************************************************************************************************
// ******************************************************************************************************
// ******************************************************************************************************


// 4. Calculate the diagonal sum 

// let arr = [
//     [1,2,3],
//     [4,5,6], 
//     [7,8,9]
// ];

// let lsum = 0;
// let rsum = 0;
// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){

//         if(i == j) lsum = lsum + arr[i][j]

//         if(i + j === arr.length - 1) rsum += arr[i][j]
//     }
// }

// console.log("Left sum : "+lsum)
// console.log("Right Sum : "+rsum)


// **********************************************************************************************
// **********************************************************************************************
// **********************************************************************************************


// 5. Jacked array 

let size =  Number(prompt("Enter the size "));
let arr = new Array(size);
for(let i = 0; i < arr.length; i++){
    let innerSize = Number(prompt("Enter the inner size "));
    arr[i] = new Array(innerSize);
}

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        arr[i][j] = Number(prompt("Enter the number "));
    }
}
console.log(arr)