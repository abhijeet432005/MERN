const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".nlink",{
    stagger: .2,
    y: 10,
    duration: 1,
    ease: Power2,
    opacity: 0
})


Shery.textAnimate(".heading h1", {
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});


gsap.from(".anim2",{
    y: 30,
    stagger: .3,
    opacity: 0,
    duration: 1,
    ease: Expo
})


Shery.imageEffect(".sustain-image-wrapper img",{
    style: 4,
    config: {"uColor":{"value":false},"uSpeed":{"value":0.39,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":3.24,"range":[0,5]},"uFrequency":{"value":2.29,"range":[0,10]},"geoVertex":{"range":[1,64],"value":38.51},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7222171937560137},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.34,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
})
Shery.imageEffect(".ephemeral-img-wrapper img",{
    style: 3,
    config: {"uFrequencyX":{"value":26.72,"range":[0,100]},"uFrequencyY":{"value":16.79,"range":[0,100]},"uFrequencyZ":{"value":13.74,"range":[0,100]},"geoVertex":{"range":[1,64],"value":29.85},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500109366742611},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.24,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
})

gsap.from(".imgff img",{
    y: "100",
    opacity: 0,
    duration: 2,
    ease: Expo
})

Shery.imageEffect(".ban-img",{
    style: 5,
    config: {"a":{"value":2,"range":[0,30]},"b":{"value":-1,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.045723330622221},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4.53,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.03,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.76,"range":[0,10]},"metaball":{"value":0.124214,"range":[0,2],"_gsap":{"id":33}},"discard_threshold":{"value":0.48,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey: true,
})

let future = document.querySelector(".future video");
let btn = document.querySelector("button");

btn.addEventListener('mouseover',function(){
    future.style.opacity = 1
})
btn.addEventListener('mouseleave',function(){
    future.style.opacity = 0
})



let crsr = document.querySelector('.cursor');
let min = document.querySelector('.min-crsr')

document.addEventListener("mousemove", function(dets){
    setTimeout(() => {
        crsr.style.opacity = 1
        min.style.opacity = 1
        
    }, 50);

    crsr.style.left = dets.pageX+'px'
    crsr.style.top = dets.pageY+'px'
    min.style.left = dets.clientX+'px'
    min.style.top = dets.clientY+'px'
})


let mouseX = 0, mouseY = 0;

document.addEventListener("mousemove", function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

function animateCursor() {
  crsr.style.left = mouseX + "px";
  crsr.style.top = mouseY + "px";
  requestAnimationFrame(animateCursor);
}

animateCursor();