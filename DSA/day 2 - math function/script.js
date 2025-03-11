// math function 

// Math.round()  --> .5 <= .10 (ceil) (10.5 --> 11)    ||||     .1 <= .4 (floor) (10.4 --> 10)

// Math.ceil()  -->upper edge  (10.4)  --> 11

// Math.floor()  --> lower edge (10.4) --> 10

// Math.trunc()  --> it is a function that remove all the number after the decimal

// Math.pow()   --> it take two parameter (a,b) = a^b (a = base , b = power) || (5,2) --> 25 (5^2)

// Math.sqrt()   --> square root --> √4 = 2

// Math.cbrt() --> cube root  -->  ∛27 = 3

// Math.abs()  --> abs = absolute (it converts the negative value into positive and (+ve to +ve))

// Math.max()   --> this function will give a greater number (10,20,30,90)  --> 90

// Math.min()    --> this function will give a smaller number (10,20,30,90)  --> 10

// Math.random()  --> this function will give a random number from 0 to 1

// toFixed()    --> this method takes a parameter i.e. how many digit you want after the decimal ((2) --> 10.21 || (3) --> 10.456) but it will give you answer in string



// console.log(Math.ceil(10.4))
// console.log(Math.floor(10.4))
// console.log(Math.round(10.5))
// console.log(Math.abs(-5))
// console.log(Math.trunc(10.257872548))
// console.log(Math.pow(5,2))

// console.log(Math.sqrt(4)))

// console.log(Math.random())





// ****************************************************************************************************************************************************************
// ****************************************************************************************************************************************************************
// ****************************************************************************************************************************************************************


// console.log(Math.min(2,0,-3,5,-7))

// 1. claculate compound interest 

/*
CI = A - p

A = p * (1 + r/100)^t

*/

// let p = Number(prompt('Enter the principle'));
// let r = Number(prompt('Enter the rate'));
// let t = Number(prompt('Enter the time'));

// console.log(p * Math.pow((1 + r/10), t) - p)






// ****************************************************************************************************************************************************************
// ****************************************************************************************************************************************************************
// ****************************************************************************************************************************************************************


//2. Generate the OTP

// console.log(Math.floor(Math.random()*9000 + 1000))



// ****************************************************************************************************************************************************************
// ****************************************************************************************************************************************************************
// ****************************************************************************************************************************************************************

// 3. Calculate the area of triangle using heroin's formula

/*

Area = √s(s−a)(s−b)(s−c)
​
s = a+b+c/2
​
*/

// let a = Number(prompt('Enter the first number'));  
// let b = Number(prompt('Enter the second number'));  
// let c = Number(prompt('Enter the third number'));   


// if (a+b <= c || a+c <= b || b+c <= a){
//     console.log('Not possible')
// }
// else{
//     let s = (a+b+c)/2;
//     console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)))
// }




// 4. Greatest number among three number

// let a = Number(prompt('Enter the first number'));  
// let b = Number(prompt('Enter the second number'));  
// let c = Number(prompt('Enter the third number'));   



// if(a > b && a > c){
//     console.log(`${a} is greater`)
// }
// else if(b > a && b > c){
//     console.log(`${b} is greater`)
// }
// else console.log(`${c} is greater`)
