// 1.

// function abcd(fn){
//     setTimeout(() => {
//         fn();
//     }, 3000);
// }

// abcd(function(){
//     console.log('hii');
// })



// 2.

// let arr = [1,2,3,4,5,6];

// function hap(array, fn){
//     let newarray = [];
    
//     for(let i = 0; i < arr.length; i++){
//         newarray.push(fn(array[i]))
//     }

//     return newarray;
// }

// console.log(hap(arr, function(value){
//     return value + 3;
// }))


// 3.

// function count(){
//     let count = 0;
//     return () => {
//         count++;
//         console.log(count)
//     }
// }

// let inc =  count();
// inc()
// inc()
// inc()



// 4.


// function limiter(fn, limit){
//     let total = 0;

//     return () => {
//         if(total < limit){
//             fn();
//             total++;
//         }
//         else console.log('aukkat me rhe')
//     }
// }

// let ans =  limiter(function(){
//     console.log('hey')
// }, 3);

// ans();
// ans();
// ans();


// 5. 

// function cb(fn){
//     setInterval(() => {
//        fn() 
//     }, 2000);
// }

// cb(() => {
//     console.log('hii')
// })


// 6.

// function greet(greeting){

//     return (name) => {
//         console.log(`${greeting} ${name}`);
//     }
// }

// let ans = greet('Hello');
// ans('Chota Bhim')



// 7.

function throttle(fn, Delay){
    let lastcall = 0;
    return () => {
        let current = Date.now();
        if(current - lastcall >= Delay){
            lastcall = current;
            fn()
        }
    }
}

let ans = throttle(() => {
    console.log('hii')
}, 2000)

ans()
ans() 
