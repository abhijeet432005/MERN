// food oreder

function onOrderedFood(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            let value = Math.random() < 0.7;
            if(value){
                res()
            }
            else rej()
        }, 500)
    })
}

onOrderedFood().then(() => {
    // console.log("Successful")
}).catch(() => {
    // console.log("failed")
})


// *****************************************************************************************************************************

// chained pormises : user -> post -> comment 

// Taask

// 1. create getUser(): resolve with {id: 1, usename: Abhi}
// 2. getPost(userId): resolve with list post title
// 3. getComments(postId): resolve with comments 
//  Chain them together using .then() and log the final output

function getUser(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({id: 1, usename: 'Abhi'})
        }, 1000);
    })
}

function getPost(userId){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(["title 1", "title 2"])
        }, 1000);
    })

}

function getComments(postId){
    return new Promise((res, rej) =>{
        setTimeout(() => {
            res(["Good Work", "You Nailed It"])
        }, 1000);
    })
}


getUser()
.then((data) => {
    // console.log(data)
    return getPost(data.id)
})
.then(function(title){
    // console.log(title)
    return getComments("title")
})
.then(function(cmts){
    // console.log(cmts)
})
.finally(() => {
    // console.log("all done")
})


// ********************************************************************************************************************

//  Fake API Delay

// Task:
// Write a function fakeAPICall(endpoint) that:
// - Accept a string like "user" or "post"
// - Resolves with some dummy data after a random delay (1-3 sec) 

// console.log(Math.floor(Math.random() * 2000 + 1000))


function fakeAPICall(endpoint){
    const data = {
        user: ["user 1", "user 2"],
        post: ["post 1", "post 2", "post 3"]
    }
    
    let delay = Math.floor(Math.random() * 2000 + 1000);

    return new Promise((res, rej) => {
        setTimeout(() => {
            res(data[endpoint])
        }, delay)
    })
}

fakeAPICall("user").then((data) => {
    console.log(data)
})

fakeAPICall("post").then((data) => {
    console.log(data)
})
 
