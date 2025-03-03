//1. write "hello world" in many ways

// console.log("Hello world");
// console.warn("Hello World");
// console.info("hello world");
// console.error("hello world");
// console.table({
//     name: 'abhi',
//     age: 21,
// })



//******************************************************************************

// 2. log the datatype 

// console.log(typeof(123))
// console.log(typeof("123"))
// console.log(typeof(true))
// console.log(typeof(null))


//******************************************************************************

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


//******************************************************************************


// use console.group()

// console.group("Week Days")  // bydefault open 
console.groupCollapsed("Week Days")
    console.log("Monday")
    console.log("Tuesday")
    console.log("Wednesday")
    console.log("Thursday")
    console.log("Friday")
    console.log("Saturday")
    console.log("Sunday")
console.groupEnd()
