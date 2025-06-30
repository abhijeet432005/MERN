const collection = [
  { title: "Shadow Profile", img: "./asset/img10.jpg" },
  { title: "Digital Mirage", img: "./asset/img11.jpg" },
  { title: "Echoes of Light", img: "./asset/img12.jpg" },
  { title: "Neon Depth", img: "./asset/img13.jpg" },
  { title: "Fractured Reality", img: "./asset/img14.jpg" },
  { title: "Urban Dusk", img: "./asset/img15.jpg" },
  { title: "Pixel Pulse", img: "./asset/img16.jpg" },
  { title: "Glitch Vibe", img: "./asset/img17.jpg" },
  { title: "Dream Sequence", img: "./asset/img18.jpg" },
  { title: "Faded Vision", img: "./asset/img19.jpg" },
  { title: "Quantum Drift", img: "./asset/img20.jpg" },
  { title: "Virtual Trance", img: "./asset/img21.jpg" },
  { title: "Retro Stream", img: "./asset/img22.jpg" },
  { title: "Electric Silence", img: "./asset/img23.jpg" },
  { title: "Lucid Static", img: "./asset/img24.jpg" },
  { title: "Silent Utopia", img: "./asset/img25.jpg" },
  { title: "Cyber Fade", img: "./asset/img26.jpg" },
  { title: "Ambient Code", img: "./asset/img27.jpg" },
  { title: "Digital Bloom", img: "./asset/img28.jpg" },
  { title: "Phantom Flow", img: "./asset/img29.jpg" },
  { title: "Parallel Echo", img: "./asset/img30.jpg" }
];

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(SplitText);

  const gallery = document.querySelector(".gallery");
  const galleryContainer = document.querySelector(".gallery-container");
  const titleContainer = document.querySelector(".title-container");

  if (!gallery || !galleryContainer || !titleContainer) {
    console.error("Missing required DOM elements. Ensure .gallery, .gallery-container, and .title-container exist.");
    return;
  }

  const cards = [];
  const transformState = [];
  let currentTitle = null;
  let isPreviewActive = false;
  let isTransitioning = false;

  const config = {
    imageCount: 25,
    radius: 275,
    sensitivity: 500,
    effectFallOf: 250,
    cardMoveAmount: 50,
    lerpFactor: 0.15,
    isMobile: window.innerWidth < 1000,
  };

  const parallaxState = {
    targetX: 0,
    targetY: 0,
    targetZ: 0,
    currentX: 0,
    currentY: 0,
    currentZ: 0,
  };

  for (let i = 0; i < config.imageCount; i++) {
    const angle = (i / config.imageCount) * Math.PI * 2;
    const x = config.radius * Math.cos(angle);
    const y = config.radius * Math.sin(angle);

    const cardIndex = i % collection.length;
    const cardData = collection[cardIndex];

    const card = document.createElement("div");
    card.className = "card";
    card.dataset.index = i;
    card.dataset.title = cardData.title;

    const img = document.createElement("img");
    img.src = cardData.img;
    card.appendChild(img);

    gsap.set(card, {
      x,
      y,
      rotation: (angle * 180) / Math.PI + 90,
      transformPerspective: 800,
      transformOrigin: "center center",
    });

    gallery.appendChild(card);
    cards.push(card);
    transformState.push({
      currentRotation: 0,
      targetRotation: 0,
      targetX: 0,
      currentY: 0,
      targetY: 0,
      currentScale: 1,
      targetScale: 1,
      angle,
    });

    card.addEventListener("click", (e) => {
      if (!isPreviewActive && !isTransitioning) {
        togglePreview(parseInt(card.dataset.index));
        e.stopPropagation();
      }
    });
  }

  function togglePreview(index) {
    isPreviewActive = true;
    isTransitioning = true;

    const angle = transformState[index].angle;
    const targetPosition = (Math.PI * 3) / 2;
    let rotationRadian = targetPosition - angle;

    if (rotationRadian > Math.PI) rotationRadian -= Math.PI * 2;
    else if (rotationRadian < -Math.PI) rotationRadian += Math.PI * 2;

    transformState.forEach((state) => {
      Object.assign(state, {
        currentRotation: 0,
        targetRotation: 0,
        currentScale: 1,
        targetScale: 1,
        targetX: 0,
        currentX: 0,
        targetY: 0,
        currentY: 0,
      });
    });

    gsap.to(gallery, {
      onStart: () => {
        cards.forEach((card, i) => {
          gsap.to(card, {
            x: config.radius * Math.cos(transformState[i].angle),
            y: config.radius * Math.sin(transformState[i].angle),
            rotationY: 0,
            scale: 1,
            duration: 1.25,
            ease: "power4.out",
          });
        });
      },
      scale: 5,
      y: 1300,
      rotation: (rotationRadian * 180) / Math.PI + 360,
      duration: 2,
      ease: "power4.inOut",
      onComplete: () => (isTransitioning = false),
    });

    gsap.to(parallaxState, {
      currentX: 0,
      currentY: 0,
      currentZ: 0,
      duration: 0.5,
      ease: "power2.out",
      onUpdate: () => {
        gsap.set(galleryContainer, {
          rotateX: parallaxState.currentX,
          rotateY: parallaxState.currentY,
          rotateZ: parallaxState.currentZ,
          transformOrigin: "center center",
        });
      },
    });

    const titleText = cards[index].dataset.title;
    const p = document.createElement("p");
    p.textContent = titleText;
    titleContainer.appendChild(p);
    currentTitle = p;

    const splitText = new SplitText(p, { type: "words", wordClass: "word" });
    const words = splitText.words;

    gsap.set(words, { y: "125%" });
    gsap.to(words, {
      y: "0%",
      duration: 0.75,
      delay: 1.25,
      stagger: 0.1,
      ease: "power4.out",
    });
  }

  function resetGallery() {
    if (isTransitioning) return;
    isTransitioning = true;

    if (currentTitle) {
      const words = currentTitle.querySelectorAll(".word");
      gsap.to(words, {
        y: "-125%",
        duration: 0.75,
        delay: 0.5,
        stagger: 0.1,
        ease: "power4.out",
        onComplete: () => {
          currentTitle.remove();
          currentTitle = null;
        },
      });
    }

    let galleryScale = window.innerWidth < 768 ? 0.6 : window.innerWidth < 1200 ? 0.8 : 1;

    gsap.to(gallery, {
      scale: galleryScale,
      y: 0,
      x: 0,
      rotation: 0,
      duration: 2.5,
      ease: "power4.inOut",
      onComplete: () => {
        isPreviewActive = isTransitioning = false;
        Object.assign(parallaxState, {
          targetX: 0,
          targetY: 0,
          targetZ: 0,
          currentX: 0,
          currentY: 0,
          currentZ: 0,
        });
      },
    });
  }

  function handleResize() {
    config.isMobile = window.innerWidth < 1000;

    let galleryScale = window.innerWidth < 768 ? 0.6 : window.innerWidth < 1200 ? 0.8 : 1;
    gsap.set(gallery, { scale: galleryScale });

    if (!isPreviewActive) {
      Object.assign(parallaxState, {
        targetX: 0,
        targetY: 0,
        targetZ: 0,
        currentX: 0,
        currentY: 0,
        currentZ: 0,
      });

      transformState.forEach((state) => {
        Object.assign(state, {
          targetRotation: 0,
          currentRotation: 0,
          targetScale: 1,
          currentScale: 1,
          targetX: 0,
          currentX: 0,
          targetY: 0,
          currentY: 0,
        });
      });
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize();

  document.addEventListener("click", () => {
    if (isPreviewActive && !isTransitioning) resetGallery();
  });

  document.addEventListener("mousemove", (e) => {
    if (isPreviewActive || isTransitioning || config.isMobile) return;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const percentX = (e.clientX - centerX) / centerX;
    const percentY = (e.clientY - centerY) / centerY;

    parallaxState.targetY = percentX * 15;
    parallaxState.targetX = -percentY * 15;
    parallaxState.targetZ = (percentX + percentY) * 5;

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < config.sensitivity && !config.isMobile) {
        const flipFactor = Math.max(0, 1 - distance / config.effectFallOf);
        const angle = transformState[index].angle;
        const moveAmount = config.cardMoveAmount * flipFactor;

        transformState[index].targetRotation = 180 * flipFactor;
        transformState[index].targetScale = 1 + 0.3 * flipFactor;
        transformState[index].targetX = moveAmount * Math.cos(angle);
        transformState[index].targetY = moveAmount * Math.sin(angle);
      } else {
        Object.assign(transformState[index], {
          targetRotation: 0,
          targetScale: 1,
          targetX: 0,
          targetY: 0,
        });
      }
    });
  });

  function animate() {
    if (!isPreviewActive && !isTransitioning) {
      parallaxState.currentX += (parallaxState.targetX - parallaxState.currentX) * config.lerpFactor;
      parallaxState.currentY += (parallaxState.targetY - parallaxState.currentY) * config.lerpFactor;
      parallaxState.currentZ += (parallaxState.targetZ - parallaxState.currentZ) * config.lerpFactor;

      gsap.set(galleryContainer, {
        rotateX: parallaxState.currentX,
        rotateY: parallaxState.currentY,
        rotateZ: parallaxState.currentZ,
      });

      cards.forEach((card, index) => {
        const state = transformState[index];

        state.currentRotation += (state.targetRotation - state.currentRotation) * config.lerpFactor;
        state.currentScale += (state.targetScale - state.currentScale) * config.lerpFactor;
        state.currentX += (state.targetX - state.currentX) * config.lerpFactor;
        state.currentY += (state.targetY - state.currentY) * config.lerpFactor;

        const angle = state.angle;
        const x = config.radius * Math.cos(angle);
        const y = config.radius * Math.sin(angle);

        gsap.set(card, {
          x: x + state.currentX,
          y: y + state.currentY,
          rotationY: state.currentRotation,
          scale: state.currentScale,
          rotation: (angle * 180) / Math.PI + 90,
          transformPerspective: 1000,
        });
      });
    }
    requestAnimationFrame(animate);
  }
  animate();
});
