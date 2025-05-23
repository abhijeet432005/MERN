window.onload = function () {
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
    gsap.registerPlugin(ScrollTrigger);

    const gallery = document.querySelector(".gallery")
    console.log(gallery)
    const previewImg = document.querySelector(".preview-img img")

    document.addEventListener("mousemove", function (event) {
        console.log("Triggering animation");
        const x = event.clientX;
        const y = event.clientY;

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const percentX = (x - centerX) / centerX;
        const percentY = (y - centerY) / centerY;

        const rotateX = 55 + percentY * 2;
        const rotateY = percentX * 2;


        gsap.to(".gallery", {
            duration: 1,
            ease: "power2.out",
            transform: `translateX(-50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            overwrite: "auto",
        });
    })

    for (let i = 0; i < 200; i++) {
        const item = document.createElement("div")
        item.className = "item"
        const img = document.createElement("img")
        img.src = `./asset/img${(i % 15) + 1}.jpg`
        item.appendChild(img)
        gallery.appendChild(item)
    }

    const items = document.querySelectorAll(".item")
    const numberOfItem = items.length;
    const angleIncrement = 360 / numberOfItem;

    items.forEach((item, index) => {
        gsap.set(item, {
            rotationY: 90,
            rotationZ: index * angleIncrement - 90,
            transformOrigin: "50% 400px",
        })

        item.addEventListener("mouseover", () => {
            const imgInsideItem = item.querySelector("img")
            previewImg.src = imgInsideItem.src;

            gsap.to(item, {
                x: 10,
                y: 10,
                z: 10,
                ease: "power2.out",
                duration: 0.5,
            })
        })

        item.addEventListener("mouseout", () => {
            previewImg.src = "./asset/img12.jpg"
            gsap.to(item, {
                x: 10,
                y: 10,
                z: 10,
                ease: "power2.out",
                duration: 0.5,
            })
        })
    })

    ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
        onRefresh: setupRotation,
        onUpdate: (self) => {
            // console.log("Scroll progress:", self.progress);
            const rotationProgress = self.progress * 360 + 1;
            items.forEach((item, index) => {
                const currentAngle = index * angleIncrement - 90 + rotationProgress;
                gsap.to(item, {
                    rotationZ: currentAngle,
                    duration: 1,
                    ease: "power3.out",
                    overwrite: "auto",
                })
            })
        }
    })
}

function setupRotation() { }