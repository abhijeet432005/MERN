// 1. Random Color Generator

let btn = document.querySelector('#click');
let box = document.querySelector('.box');


btn.addEventListener('click', function(){
    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);

    
    box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
})


// 2. who wil be the winner 

let arr = [
    {
        team: 'CSK',
        primary: 'red',
        secondary: 'green'
    },

    {
        team: 'MI',
        primary: 'yellow',
        secondary: 'violet'
    },

    {
        team: 'RCB',
        primary: 'brown',
        secondary: 'pink'
    },

    {
        team: 'SRH',
        primary: 'blue',
        secondary: 'orange'
    },
    {
        team: 'DC',
        primary: 'purple',
        secondary: 'grey'
    }
];

var h1 = document.querySelector('h1');
let guess = document.querySelector('#guess');

guess.addEventListener('click', function(){
    let num = Math.floor(Math.random() * arr.length);
    let winner = arr[num];

    h1.innerHTML = winner.team;
    h1.style.backgroundColor = winner.primary;
    h1.style.color = winner.secondary;
});