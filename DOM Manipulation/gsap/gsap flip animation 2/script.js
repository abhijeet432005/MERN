const scroller = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true
})

gsap.registerPlugin(Flip)

CustomEase.create("cubic", "0.83, 0, 0.17, 1")
const gallery = document.querySelector(".img-gallery-container"),
images = gsap.utils.toArray(".img");

document.querySelector(".btn").addEventListener("click", () => {
    let state = Flip.getState(".img-gallery-container .img")

    gallery.classList.toggle("order")
    images.forEach((img, i) => {
        img.classList.toggle("reorder")
    })

    Flip.from(state, {
        absolute: true,
        duration: 2, 
        stagger: 0.05,
        ease: "cubic"
    })
})