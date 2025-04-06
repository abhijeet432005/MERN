const prompt = require('prompt-sync')();

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



// 3d Array

let arr = [
    [[1,2,3] , [4,5,6]],
    [[7,8,9] , [10,11,12]],
    [[13,14,15] , [16,17,18]]
]

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        for(let k = 0; k < arr[i][j].length; k++){
            process.stdout.write(`${arr[i][j][k]} `);
        }
    }
    console.log()
}