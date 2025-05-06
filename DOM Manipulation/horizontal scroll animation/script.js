gsap.registerPlugin(ScrollTrigger);



document.addEventListener("DOMContentLoaded", () =>{
    
    const cards = [
        {id: "#card-1", endTranslateX: -2000, rotate: 45},
        {id: "#card-2", endTranslateX: -1000, rotate: -30},
        {id: "#card-3", endTranslateX: -2000, rotate: 45},
        {id: "#card-4", endTranslateX: -1500, rotate: -30},
    ];

    ScrollTrigger.create({
        trigger: ".wrapper-404",
        start: 'top top',
        end: "+=900vh",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
            gsap.to(".wrapper-404", {
                x: `${-350 * self.progress}vw`,
                duration: 0.5,
                ease: "power3.out"
            })
        }
    })

    cards.forEach( card => {
        ScrollTrigger.create({
            trigger: card.id,
            start: "top top",
            end: "+=1200vh",
            scrub: 1,
            onUpdate: (self) => {
                gsap.to(card.id, {
                    x: `${card.endTranslateX * self.progress}px`,
                    rotate: `${card.rotate * self.progress * 2}px`,
                    duration: 0.5,
                    ease: "power3.out"
                })
            }
        })
    });
})




  Shery.makeMagnet("h1" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });


  Shery.imageEffect("img", {
    style: 4, //Select Style
    config: {"uColor":{"value":false},"uSpeed":{"value":0.6,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    preset: "./presets/wigglewobble.json",
  });
