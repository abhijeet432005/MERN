document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".items");
    let imageIndex = 1;
    let animationTimeout = null;
    let currentPlaying = false;

    function addNewItem(x, y){
        const newItem = document.createElement("div");
        newItem.className = "item";
        newItem.style.left = `${x - 75}px`
        newItem.style.top = `${y - 100}px`

        const img = document.createElement("img");
        img.src = `./asset/img${imageIndex}.jpg`;


        newItem.appendChild(img);
        imageIndex = (imageIndex % 11) + 1;

        container.appendChild(newItem);
        manageItemList();
    }

    function manageItemList(){
        while(container.children.length > 20){
            container.removeChild(container.firstChild);
        }
    }

    function startAnimation(){
        if(currentPlaying || container.children.length === 0) return 0;
        currentPlaying = true;

        gsap.to(".item", {
            y: 10000,
            scale: 0.5,
            opacity: 0,
            duration: 0.3,
            stagger: 0.25,
            onComplete: function () {
                this.targets().forEach(item => {
                    if(item.parentNode){
                        item.parentNode.removeChild(item)
                    }
                });

                currentPlaying = false;
            }

        })
    }

    container.addEventListener("mousemove", function (e) {
        clearTimeout(animationTimeout);
        addNewItem(e.pageX, e.pageY)
        animationTimeout = setTimeout(startAnimation, 50);
    })

    Shery.mouseFollower({
        //Parameters are optional.
        // skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
})