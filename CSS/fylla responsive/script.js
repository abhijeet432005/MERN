

let crsr = document.querySelector('.cursor');
let crsr2 = document.querySelector('.mini');

document.addEventListener('mousemove', function(dets){

    setTimeout(() => {
        crsr.style.opacity = 1
        crsr2.style.opacity = 1
    }, 100);

    crsr.style.top = dets.clientY+'px'
    crsr.style.left = dets.clientX+'px'
    crsr2.style.top = dets.clientY+'px'
    crsr2.style.left = dets.clientX+'px'
})