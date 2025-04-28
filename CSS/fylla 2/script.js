let crsr = document.querySelector('.cursor');
document.addEventListener('mousemove', (dets) => {
    setTimeout(() => {
        crsr.style.opacity = 1
    }, 100);

    crsr.style.top = dets.clientY+'px';
    crsr.style.left = dets.clientX+'px'
})