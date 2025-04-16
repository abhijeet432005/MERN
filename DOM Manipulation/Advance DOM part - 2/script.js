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


// task : implement dark mode and light mode


let darkmode = localStorage.getItem('darkmode');
let main = document.querySelector('main');
let btn = document.querySelector('.d-theme');

function enableDark(){
    main.classList.add('dark')
    localStorage.setItem('darkmode', 'active')
}

function disableDark(){
    main.classList.remove('dark');
    localStorage.setItem('darkmode', null);
}

if(darkmode === 'active') enableDark();


btn.addEventListener('click', function(){
    darkmode = localStorage.getItem('darkmode')
    darkmode !== 'active' ? enableDark() : disableDark();
})

