// foreach loop --> works on array

// let arr = [1,2,3,4,5,6];

// arr.forEach(function(val){
//     console.log(val*10);
// })


//***********************************************************************************************************************************************


//forin loop --> works on object

// let obj = {
//     car: "Nano",
//     price: "1.5 lakh",
//     color: "Gray"
// };

// for(let key in obj){

//     console.log(key , obj[key])
// }


//********************************************************************************************************************************************


//forof loop

// let str = "JS";

// for(let val of str){
//     console.log(val + val);
// }



//********************************************************************************************************************************************


//map --> map is like a forEach loop but it returns a vlaue

// what map doo --> map loop karta hai and har baar returned value ko new array mein push kr deta hai

// let arr = [1,2,3,4,5,6];

// var ans = arr.map(function(val){
//     return 12;
// })
    
// console.log(ans)
    
    
    
//**********************************************************************************************************************************************


// filter --> filter bhi ek new array create krega 
        // true hua to value print kr dega
        // false hua to value print nhi krega 


// let arr = [1,2,3,4,5,6];

// var ans = arr.filter(function(val){
//     return val % 3 === 0;   //true : 3,6  (it will print)
//                             //false : 1,2,4,5  (not print)
// })



//***************************************************************************************************************************************************


// Reduce : reduce ek bade se array ko minimize kr single value mai create kr deta 


// let arr = [1,2,3,4,5,6];

// var ans = arr.reduce(function(accumulator, value){
//     return accumulator * value;

// }, 1)  // 1 - initial value of accumulator


//**********************************************************************************************************************************************

// 1. use while loop to print multiple of 3

// let a = 3;

// while(a < 31){
//     console.log(a);
//     a += 3;
// }


//**********************************************************************************************************************************************

// 2. wap to print sum of 1 to 100

// let sum = 0;

// for(let i = 1; i <= 100; i++){
//     sum += i;
// }

// console.log(sum)


//**********************************************************************************************************************************************


// let arr = [1,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6]
// let ans = [...new Set(arr)]