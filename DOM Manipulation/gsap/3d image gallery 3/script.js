
const items = document.querySelectorAll(".item");
const container = document.querySelector(".container");
const numberOfItems = items.length;
const angleIncrement = (2 * Math.PI) / numberOfItems;
const radius = 300;
let isGalleryOpen = false;

const centerX = container.offsetWidth / 2;
const centerY = container.offsetHeight / 2;

const t1 = gsap.timeline();

items.forEach(function (item, index) {
    const img = document.createElement('img');
    img.src = `./asset/img${index + 1}.jpg`;
    item.appendChild(img);

    const angle = index * angleIncrement;
    const initialRotation = (angle * 180 / Math.PI) - 90;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    gsap.set(item, { scale: 0 });

    t1.to(item, {
        left: x + 'px',
        top: y + 'px',
        rotation: initialRotation,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        delay: 1
    }, index * 0.1);

    item.addEventListener('click', function () {
        if (!isGalleryOpen) {
            isGalleryOpen = true;

            const duplicate = item.cloneNode(true);
            duplicate.style.position = 'absolute';
            duplicate.style.left = item.style.left;
            duplicate.style.top = item.style.top;
            container.appendChild(duplicate);
            item.style.visibility = 'hidden';

            gsap.to(Array.from(items).filter(i => i != item), {
                scale: 0,
                duration: 0.5,
                ease: "power2.in",
                stagger: 0.05,
            });

            const endRotation = initialRotation > 180 ? initialRotation - 360 : initialRotation;

            gsap.to([item, duplicate], {
                rotation: endRotation,
                duration: 0.0001,
                onComplete: () => {
                    gsap.to([item, duplicate], {
                        left: '50%',
                        top: '50%',
                        transform: "translate(-50%, -50%) scale(5)",
                        duration: 1,
                        ease: "power2.out",
                        delay: 1.25
                    });
                }
            });

            const closeGallery = () => {
                if (isGalleryOpen) {
                    gsap.to([item, duplicate], {
                        left: x + 'px',
                        top: y + 'px',
                        scale: 1,
                        rotation: initialRotation,
                        duration: 1,
                        ease: "power2.out",
                        onComplete: () => {
                            duplicate.remove();
                            item.style.visibility = 'visible';
                            gsap.to(items, {
                                scale: 1,
                                duration: 1,
                                stagger: 0.05,
                                ease: "power2.out"
                            });
                            isGalleryOpen = false;
                        }
                    });
                }
            };

            

            duplicate.addEventListener('click', closeGallery);
        }
    });
});


