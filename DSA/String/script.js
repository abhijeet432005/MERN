// 1. Reverse the string 

// let str = "hello";
// let rev = ""
// for(let i = str.length -1; i >=0; i--){
//     rev += str.charAt(i)
// }
// console.log(rev)



// 2. Palindromic string

let str = "racecar";
let arr = str.split("")
let i = 0, j = str.length -1;

// while(i < j){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp;
//     i++;
//     j--
// }

// let reverse = arr.join("")

// console.log((str === reverse) ? "palindrome" : "not a palindrome")
let ispal = true;

while(i < j){
    if(str[i] !== str[j]) {
        pal = false;
        break;
    }
    i++;
    j--
}

console.log(ispal ? "palindrome" : "not a palindrome")

