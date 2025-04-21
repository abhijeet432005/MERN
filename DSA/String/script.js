let prompt = require('prompt-sync')();


// 1. Reverse the string 

// let str = "hello";
// let rev = ""
// for(let i = str.length -1; i >=0; i--){
//     rev += str.charAt(i)
// }
// console.log(rev)




// **************************************************************************************************************
// **************************************************************************************************************
// **************************************************************************************************************

// 2. Palindromic string

// let str = "racecar";
// let arr = str.split("")
// let i = 0, j = str.length -1;

// while(i < j){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp;
//     i++;
//     j--
// }

// let reverse = arr.join("")

// console.log((str === reverse) ? "palindrome" : "not a palindrome")



// let ispal = true;

// while(i < j){
//     if(str[i] !== str[j]) {
//         pal = false;
//         break;
//     }
//     i++;
//     j--
// }

// console.log(ispal ? "palindrome" : "not a palindrome")




// **************************************************************************************************************
// **************************************************************************************************************
// **************************************************************************************************************



// 3.  toggele the character ---> AbC -> aBc
// let str = prompt("Enter the string : ");
// let ans = "";

// for(let i = 0; i < str.length; i++){
//     let val = str.charCodeAt(i)
//     if(val >= 65 && val <= 90){
//         ans += String.fromCharCode(val + 32)
//     }

//     else if(val >= 97 && val <= 122){
//         ans += String.fromCharCode(val - 32)
//     }
// }
// console.log(ans)




// **************************************************************************************************************
// **************************************************************************************************************
// **************************************************************************************************************


// 4. 


let str = "hello bhai kaisa hai";
let arr = str.split(" ");
let ans = "";

for(let i = 0; i < arr.length; i++){
    let word = arr[i];
    ans += word.charAt(0).toUpperCase() + word.substring(1, word.length - 1) + word.charAt(word.length - 1).toUpperCase() +" "
}

console.log(ans)