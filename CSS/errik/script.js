let main = document.querySelector('main');
let menu = document.querySelector('.menu i');
let nav = document.querySelector('.nav');
let closed = document.querySelector('.close i')
let flag = 0;

menu.addEventListener('click', function(){
    nav.style.top = '0';
})

closed.addEventListener('click', function(){
    nav.style.top = '-100%';

})
