//1. write "hello world" in many ways

// console.log("Hello world");
// console.warn("Hello World");
// console.info("hello world");
// console.error("hello world");
// console.table({
//     name: 'abhi',
//     age: 21,
// })



//************************************************************************************************************************************

// 2. log the datatype 

// console.log(typeof(123))
// console.log(typeof("123"))
// console.log(typeof(true))
// console.log(typeof(null))


//************************************************************************************************************************************

// 3. swap the vlaue of two variable

// 1st way(using third variable)

// let a,b,c;
// a = 15;
// b = 10;

// c = a;
// a = b;
// b = c;

// console.log(`a: ${a} , b: ${b}`)


// 2nd way(without using third variable)

// let a,b;
// a= 15;
// b = 10;
// console.log(`a: ${a} , b: ${b}`);

// a = a + b;
// b = a - b;
// a = a - b;
// console.log(`a: ${a} , b: ${b}`);


// other way

// let a = 12;
// let b = 10;

// [a,b] = [b,a]
// console.log(`a: ${a} , b: ${b}`);


//************************************************************************************************************************************


//4. use console.group()

// console.group("Week Days")  // bydefault open 
// console.groupCollapsed("Week Days")
//     console.log("Monday")
//     console.log("Tuesday")
//     console.log("Wednesday")
//     console.log("Thursday")
//     console.log("Friday")
//     console.log("Saturday")
//     console.log("Sunday")
// console.groupEnd()




//************************************************************************************************************************************


// 6. Declare a const object, modify its properties, and log the update object

// Imp: const variable can be update but it can't be reassign 

// const obj = {
//     name: 'abhi',
//     age: '22',
//     email: 'test@test.com'
// };

// Object.freeze(obj);  // this function helps to prevent to update the value

// obj.age = 20;
// obj.email = 'huihui'


//************************************************************************************************************************************

// 7. convert the string into number in different ways

// // console.log(Number('50'))
// console.log(parseInt('50'))
// console.log(+'50')


//************************************************************************************************************************************

// 8. check if "JavaScript" contains "Script" without using .include()

let str = "JavaScript"
console.log(str.includes("Script"))

if (str.search("Script") === -1){
    console.log("False")
}


if (str.indexOf("Script") === -1){
    console.log("False")
}

else{
    console.log("True")
}



var x = Number(prompt("Enter the number"));
var sum, remainder;
sum = 0;

while(x != 0){
    remainder = x % 10;  
    sum = sum + remainder;
    x = parseInt(x/10);
}

console.log(sum); 