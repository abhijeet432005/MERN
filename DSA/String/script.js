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


// 4. Capitalize the first and last character of word


// let str = "hello bhai kaisa hai";
// let arr = str.split(" ");
// let ans = "";

// for(let i = 0; i < arr.length; i++){
//     let word = arr[i];
//     ans += word.charAt(0).toUpperCase() + word.substring(1, word.length - 1) + word.charAt(word.length - 1).toUpperCase() +" "
// }

// console.log(ans)





// **************************************************************************************************************
// **************************************************************************************************************
// **************************************************************************************************************

// 5. count the frequency 

// let str = prompt("Enter the string : ");
// let freq = {};

// for(let val of str){
//     if(freq[val]){
//         freq[val] += 1
//     }
//     else freq[val] = 1
// }



// console.log(freq)




// **************************************************************************************************************
// **************************************************************************************************************
// **************************************************************************************************************


// 6. Anagram string 

function anagram(str1, str2){

    if(str1.length != str2.length) return console.log("invalid");

    let freq = {};
    
    for(let val of str1){
        if(freq[val]){
            freq[val] += 1
        }
        else freq[val] = 1
    }

    for(let val of str2){
        if(freq[val]){
            freq[val] -= 1
        }
    }

    for(let val in freq){
        if(freq[val] != 1){
            return console.log("not a anagram")
        }
    }

    return console.log("anagram")
}

anagram("race", "care")