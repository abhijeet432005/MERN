// local Storage --> Browser ki stroage , limit ---> 5MB - 10MB (it store data in the form of strings)
// 1. localStorage.getItem
// 2. localStorage.setItem 


// localStorage.setItem('user', 'Abhi')
// console.log(localStorage.getItem('user'))
// localStorage.clear()


// 1. store object/array fo object in localStorage 

// let users = [
//     {
//         user: "Harshit",
//         age: 20
//     },
//     {
//         user: "Harshita",
//         age: 24
//     },
//     {
//         user: "Harshiti",
//         age: 22
//     }
// ]

// let newUsers = JSON.stringify(users)

// localStorage.setItem('users', newUsers)

// now print in the form of array of object 

// let users = JSON.parse(localStorage.getItem('users'));
// console.log(users)



