gsap.registerPlugin(ScrollTrigger);

function mainAnimate(){

    function addImageScaleAnimation() {
        gsap.utils.toArray("section").forEach((section, index) => {
            const image = document.querySelector(`#preview-${index + 1} img`);
    
            const startCondition = index === 0 ? "top top" : "bottom bottom";
    
            gsap.to(image, {
                scrollTrigger: {
                    trigger: section,
                    start: startCondition,
                    end: () => {
                        const viewportHeight = window.innerHeight;
                        const sectionBottom = section.offsetTop + section.offsetHeight;
                        const additionalDistance = viewportHeight * 0.5;
                        const endValue = sectionBottom - viewportHeight + additionalDistance;
                        return `+=${endValue}`;
                    },
                    scrub: 1,
                },
                scale: 2,
                ease: "none"
            });
        });
    }
    
    addImageScaleAnimation();
    
    function animateClipPath(
        sectionId,
        previewId,
        startClipPath,
        endClipPath,
        start = "top top",
        end = "bottom top"
    ) {
        const section = document.querySelector(sectionId);
        const preview = document.querySelector(previewId);
    
    
        ScrollTrigger.create({
            trigger: section,
            start: start,
            end: end,
            onEnter: () => {
                gsap.to(preview, {
                    scrollTrigger: {
                        trigger: section,
                        start: start,
                        end: end,
                        scrub: 0.125,
                    },
                    clipPath: endClipPath,
                    ease: "none"
                })
            }
        })
    }
    
    animateClipPath(
        "#section-1",
        "#preview-1",
        "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
    );
    
    const totalSection = 7;
    
    for (let i = 1; i <= totalSection; i++) {
        const currentSection = `#section-${i}`;
        let prevPreview = `#preview-${i - 1}`;
        const currentPreview = `#preview-${i}`;
    
        animateClipPath(
            currentSection,
            prevPreview,
            "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            "top bottom",
            "center center"
        );
    
        if (i < totalSection) {
            animateClipPath(
                currentSection,
                currentPreview,
                "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                "center center",
                "bottom top"
            );
        }
    }
}

mainAnimate()

Shery.mouseFollower({
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
