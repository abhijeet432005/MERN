// 1. remove duplicate element form array

// let arr = [1,1,1,2,3,3,4,6,6,6];
// let ans = [...new Set(arr)];
// console.log(ans)


// ****************************************************************************************************************************

// 2. find the second largest number in an array

// let arr = [1,5,8,8,45,85,3,3,4,4,56,25];
// let ans = [...new Set(arr)].sort(function(a,b){
//     return b-a;
// })

// console.log(ans[1]);


// ********************************************************************************************************************************

// 3. Reverse array without using reverse()

// let arr = [1,2,3,4,5,6];
// let ans = [];

// for(let i = arr.length -1; i >= 0; i--){
//     ans.push(arr[i])
// }

// console.log(ans)


// *******************************************************************************************************************************

// 4. Find the occurence of a number

// let arr = [1,6,6,4,4,5,8,3,3,4];
// let obj = {};

// arr.forEach(function(val){
//     obj[val] === undefined ? (obj[val] = 1 ) : obj[val]++;    // ternary operator

//     // if - else

//     // if(obj[val] === undefined){
//     //     obj[val] = 1;
//     // }
//     // else{
//     //     obj[val]++
//     // }
// })

// console.log(obj)
