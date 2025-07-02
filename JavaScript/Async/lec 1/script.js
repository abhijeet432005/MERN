// callBack hell

// function stepOne(cb){
//     console.log("step 1");
//     cb()
// }
// function stepTwo(cb){
//     console.log("step 2");
//     cb()
// }
// function stepThree(cb){
//     console.log("step 3");
//     cb()
// }


// stepOne(() => {
//     stepTwo(() => {
//         stepThree(() =>{
//             console.log("all fnc are executed")
//         })
//     })
// })



// solution of callback hell is Promises


//  How to create promise

// const p =  new Promise(function(resolve, reject){
//     console.log("request sent")
//     console.log("Data is collecting")
//     console.log("Data nhi milla")
//     // reject()
//     resolve()
// })

// p.then(() => {
//     console.log("resolve")
// }).catch(() => {
//     console.log("rejected")
// })


function stepOne() {
    return new Promise(function (res, rej) {
        console.log("step 1")
        res()
    })
}
function stepTwo() {
    return new Promise(function (res, rej) {
        console.log("step 2")
        res()
    })
}
function stepThree() {
    return new Promise(function (res, rej) {
        console.log("step 3")
        res()
    })
}


stepOne().then(() => stepTwo()).then(() => stepThree()).then(() => console.log("all done"))