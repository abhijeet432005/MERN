Shery.imageEffect(".image", {
    style: 3,
    /*optional parameters
    these parameter dose not applies to custom scroll trigger callback */
    scrollSnapping: true,
    scrollSpeed: 4,
    touchSpeed: 6,
    damping: 7,
    config:{"uFrequencyX":{"value":10.69,"range":[0,100]},"uFrequencyY":{"value":8.4,"range":[0,100]},"uFrequencyZ":{"value":11.45,"range":[0,100]},"geoVertex":{"range":[1,64],"value":31.78},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7312296350584205},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":-0.03,"y":0}},"shapeScale":{"value":{"x":0.56,"y":0.46}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0.0004248780886025751},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.09,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    // debug: true
  });

  Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.textAnimate(".text" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });


  Shery.makeMagnet(".text" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.imageMasker(".image" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "Scroll Me",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
