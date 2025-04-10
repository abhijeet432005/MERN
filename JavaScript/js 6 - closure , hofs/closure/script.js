// 1. Create a function that takes another function as an argument and call it after 3 seconds (HOF + Callbacks)

// function abcd(fn){
//     // fn();

//     setTimeout(fn, 3000);   // after 3 seconds
// }

// abcd(function(){
//     console.log('hey')
// });




// ******************************************************************************************************************************


// 2. Implement your own version of '.map()' as a higher prder function


// let arr = [4,1,2,8,5,9];

// function map(a, fn){
//     let newarr = [];

//     for(let i = 0; i< arr.length; i++){
//         newarr.push(fn(a[i]))
//     }

//     return newarr;
// }

// arr.sort(function(a,b){
//     return a-b;
// })

// let ans = map(arr, function(value){
//     return value + 2;
// })



// ******************************************************************************************************************************

// 3. Write a function that uses clouser to create a counter 

// function counter(){
//     let count = 0;

//     return function(){
//         count++;
//         console.log(count)
//     }
// }

// let fn = counter();
// fn();
// fn();
// fn();


// ******************************************************************************************************************************


// 4. Implement a function that limits how many times another function can be called (Clouser + HOFS)

// function limiter(fn, limit){
//     let total = 0;
//     return function(){
//         if(total < limit){
//             total++;
//             fn();
//         }

//         else{
//             console.error("limit Reached");
//         }
//     }
// }

// let ans = limiter(function(){
//     console.log('hey')
// }, 3)

// ans();
// ans();
// ans();
// ans();



// ******************************************************************************************************************************


// 5. Create a function that takes a callback and executes it after every `n` seconds

// function abcd(fn, time){
//     setInterval(fn, time * 1000)
// }

// abcd(function(){
//     console.log('hello');
// }, 2)


// ******************************************************************************************************************************


//6. Implement a function that returns a function with a preset greeting (Clouser)

// function GreetSetup(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`)
//     }
// }

// let Indian = GreetSetup("Namaste");
// Indian("Harsh")
// Indian("Harshita")
// Indian("Harshika")



// ******************************************************************************************************************************



// 7. Implement a function that takes a callback and only executes it once (HOF + Clouser)

// function once(fn){

//     let executes = false;

//     return function(){
//         if (!executes){
//             executes = true;
//             fn();
//         }

//         else{
//             console.error('no more')
//         }
//     }
// }

// let ans = once(function(){
//     console.log('Only one')
// });

// ans();
// ans();
// ans();



// ******************************************************************************************************************************


// 8. Implement a function that throttle another function (HOF + Clouser)


// function throt(fn, delay){
//     let lastcall = 0;
//     return function(){
//         let current = Date.now()
//         if(current - lastcall >= delay){
//             lastcall = current;
//             fn(); 
//         }
//     }
// }


// let newfnc = throt(function(){
//     console.log('hello')
// }, 2000);

// newfnc();


