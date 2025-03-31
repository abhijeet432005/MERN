let prompt = require("prompt-sync")()



// 10. Linear search



// let arr = [1,2,3,4,5];
// let target = Number(prompt("Enter the element "));
// let index = -1;

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] === target){
//         index = i;
//     }

// }
// if(index == -1) console.log("Element not found");
// else console.log(`Element ${target} Found at ${index} index`)


// ****************************************************************************************************
// ****************************************************************************************************
// ****************************************************************************************************

let arr = [1,2,3,4,5,6,7,8,9];
let target = Number(prompt("Enter the element "));

if(search(arr, target) === -1) console.log("not found");
else console.log("Element found")

function search(arr, target){
    let start = 0, end = arr.length - 1; 
    while(start <= end){
        let mid = Math.floor((start + end) / 2);

        if(arr[mid] === target) return mid;
        else if(arr[mid] > target) end = mid - 1;
        else start = mid + 1;
    }

    return -1
}