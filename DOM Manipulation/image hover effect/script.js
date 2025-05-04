const blocks = document.querySelectorAll('.block');
const reset = 300

blocks.forEach((block) => {
    let timeout;

    block.addEventListener('mousemove', () => {
        clearTimeout(timeout);
        block.classList.add("active");

        timeout = setTimeout(() => {
            block.classList.remove('active')
        }, reset);
    })
})

Shery.imageMasker(".img-container" /* Element to target.*/, {
    y: -100,
    y: 50,
    text: "Move",
    ease: "cubic-bezier(0.23, 1, 0.320, 8)",
    duration: 1,
  });

  Shery.textAnimate("h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 0.2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    // multiplier: 0.1,
  });

Shery.makeMagnet(".img-container" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 2)",
    duration: 1,
});


