let main = document.querySelector('main');
let menu = document.querySelector('.menu i');
let nav = document.querySelector('.nav');
let closed = document.querySelector('.close i')


menu.addEventListener('click', function(){
    nav.style.top = '0';
})

closed.addEventListener('click', function(){
    nav.style.top = '-100%';

})

let crsr = document.querySelector('.cursor');
let mini = document.querySelector('.mini');

document.addEventListener('mousemove', function(dets){

    setTimeout(() => {
        mini.style.opacity = 1
        crsr.style.opacity = 1
    }, 100);

    crsr.style.top = dets.clientY+'px'
    crsr.style.left = dets.clientX+'px'
    mini.style.top = dets.clientY+'px'
    mini.style.left = dets.clientX+'px'
})
