let main = document.querySelector('main')
let crsr = document.querySelector('.cursor');
let mini = document.querySelector('.mini');


main.addEventListener('mousemove', function(dets){
    setTimeout(() => {
        crsr.style.opacity = 1
    }, 50);

    crsr.style.top = dets.clientY+'px'
    crsr.style.left = dets.clientX+'px'
    mini.style.top = dets.clientY+'px'
    mini.style.left = dets.clientX+'px'
})