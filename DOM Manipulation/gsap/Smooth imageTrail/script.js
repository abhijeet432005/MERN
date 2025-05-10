document.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis({
    smooth: true,
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  const container = document.querySelector(".trail-container");

  const config = {
    imageCount: 30,
    imageLifeSpan: 750,
    removeDelay: 50,
    mouseThreshold: 100,
    scrollThreshold: 50,
    idleCursorInterval: 300,
    inDuration: 750,
    outDuration: 1000,
    inEasing: "cubic-bezier(.07,.5,.5,1)",
    outEasing: "cubic-bezier(.87,0,.13,1)",
  };

  const images = Array.from(
    { length: config.imageCount },
    (_, i) => `./asset/img${i + 1}.jpg`
  );

  const trail = [];

  let mouseX = 0,
    mouseY = 0,
    lastMouseX = 0,
    lastMouseY = 0;
  let isMoving = false,
    isCursorInContainer = 0;
  let lastRemovalTime = 0,
    lastSteadyImageTime = 0,
    lastScrollTime = 0;
  let isScrolling = false,
    scrollTicking = false;

  const isInContainer = (x, y) => {
    const rect = container.getBoundingClientRect();
    return (
      x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
    );
  };

  const setInitialMousePos = (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    lastMouseX = mouseX;
    lastMouseY = mouseY;
    isCursorInContainer = isInContainer(mouseX, mouseY);
    document.removeEventListener("mouseover", setInitialMousePos, false);
  };

  document.addEventListener("mouseover", setInitialMousePos, false);

  const hasMovedEnough = () => {
    const distance = Math.sqrt(
      Math.pow(mouseX - lastMouseX, 2) + Math.pow(mouseY - lastMouseY, 2)
    );
    return distance > config.mouseThreshold;
  };

  const createTrailImage = () => {
    if (!isCursorInContainer) return;

    const now = Date.now();

    if (isMoving && hasMovedEnough()) {
      lastMouseX = mouseX;
      lastMouseY = mouseY;
      createImage();
      return;
    }

    if (!isMoving && now - lastSteadyImageTime >= config.idleCursorInterval) {
      lastSteadyImageTime = now;
      createImage();
    }
  };

  const createImage = () => {
    const img = document.createElement("img");
    img.classList.add("trail-image");

    const randomIndex = Math.floor(Math.random() * images.length);
    const rotation = (Math.random() - 0.5) * 20;
    img.src = images[randomIndex];

    const rect = container.getBoundingClientRect();
    const relativeX = mouseX - rect.left;
    const relativeY = mouseY - rect.top;

    img.style.left = `${relativeX}px`;
    img.style.top = `${relativeY}px`;
    img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(0)`;
    img.style.transition = `transform ${config.inDuration}ms ${config.inEasing}`;
    container.appendChild(img);

    setTimeout(() => {
      img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(1)`;
    }, 10);

    trail.push({
      element: img,
      rotation: rotation,
      removeTime: Date.now() + config.imageLifeSpan,
    });
  };

  const createScrollTrailImage = () => {
    if (!isCursorInContainer) return;

    lastMouseX += (config.mouseThreshold + 10) * (Math.random() > 0.5 ? 1 : -1);
    lastMouseY += (config.mouseThreshold + 10) * (Math.random() > 0.5 ? 1 : -1);

    createImage();

    lastMouseX = mouseX;
    lastMouseY = mouseY;
  };

  const removeOldImage = () => {
    const now = Date.now();

    if (now - lastRemovalTime < config.removeDelay || trail.length === 0)
      return;

    const oldestImage = trail[0];
    if (now >= oldestImage.removeTime) {
      const imgToRemove = trail.shift();

      imgToRemove.element.style.transition = `transform ${config.outDuration}ms ${config.outEasing}`;
      imgToRemove.element.style.transform = `translate(-50%, -50%) rotate(${imgToRemove.rotation}deg) scale(0)`;

      lastRemovalTime = now;

      setTimeout(() => {
        if (imgToRemove.element.parentNode) {
          imgToRemove.element.parentNode.removeChild(imgToRemove.element);
        }
      }, config.outDuration);
    }
  };

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    isCursorInContainer = isInContainer(mouseX, mouseY);

    if (isCursorInContainer) {
      isMoving = true;
      clearTimeout(window.moveTimeout);
      window.moveTimeout = setTimeout(() => {
        isMoving = false;
      }, 100);
    }
  });

  window.addEventListener("scroll", () => {
    isCursorInContainer = isInContainer(mouseX, mouseY);

    if (isCursorInContainer) {
      isMoving = true;
      lastMouseX += (Math.random() - 0.5) * 10;

      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        isMoving = false;
      }, 100);
    }

    const now = Date.now();
    isScrolling = true;

    if (now - lastScrollTime < config.scrollThreshold) return;

    lastScrollTime = now;

    if (!scrollTicking) {
      requestAnimationFrame(() => {
        if (isScrolling) {
          createScrollTrailImage();
          isScrolling = false;
        }
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  });

  const animate = (time) => {
    lenis.raf(time);
    createTrailImage();
    removeOldImage();
    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);

  Shery.mouseFollower({
  //Parameters are optional.
  // skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

  // Optional text animation
  Shery.textAnimate("h1", {
    style: 1,
    y: 10,
    duration: 0,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: -0.0001,
  });
});
