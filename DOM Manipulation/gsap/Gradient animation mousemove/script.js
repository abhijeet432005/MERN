const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let mouseMoved = false;

const pointer = {
    x: 0.5 * window.innerWidth,
    y: 0.5 * window.innerHeight,
};

const params = {
    pointsNumber: 40,
    widthFactor: 10,
    mouseThreshold: 0.5,
    spring: 0.25,
    friction: 0.5,
};

const trail = new Array(params.pointsNumber).fill().map(() => ({
    x: pointer.x,
    y: pointer.y,
    dx: 0,
    dy: 0,
}));

window.addEventListener("click", e => updateMousePosition(e.pageX, e.pageY));
window.addEventListener("mousemove", e => {
    mouseMoved = true;
    updateMousePosition(e.pageX, e.pageY);
});
window.addEventListener("touchmove", e => {
    mouseMoved = true;
    updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
});

function updateMousePosition(x, y) {
    pointer.x = x;
    pointer.y = y;
}

function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function update(t = 0) {
    if (!mouseMoved) {
    pointer.x = (0.5 + 0.1 * Math.cos(0.0005 * t) * Math.sin(0.001 * t)) * window.innerWidth;
    pointer.y = (0.5 + 0.1 * Math.cos(0.0007 * t) * Math.sin(0.0012 * t)) * window.innerHeight;
}


    ctx.clearRect(0, 0, canvas.width, canvas.height);

    trail.forEach((p, i) => {
        const prev = i === 0 ? pointer : trail[i - 1];
        const spring = i === 0 ? 0.4 * params.spring : params.spring;

        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;

        p.x += p.dx;
        p.y += p.dy;
    });

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "rgba(255, 99, 171, 1)");   // brighter pink
    gradient.addColorStop(1, "rgba(87, 61, 255, 1)");
    ctx.strokeStyle = gradient;
    ctx.lineCap = "round";

    ctx.beginPath();
    ctx.moveTo(trail[0].x, trail[0].y);

    for (let i = 0; i < trail.length - 1; i++) {
        const xc = 0.5 * (trail[i].x + trail[i + 1].x);
        const yc = 0.5 * (trail[i].y + trail[i + 1].y);
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        ctx.lineWidth = (params.widthFactor * 18) * ((params.pointsNumber - i) / params.pointsNumber);
        ctx.stroke();
    }

    ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
    ctx.stroke();

    requestAnimationFrame(update);
}

setupCanvas();
update();
window.addEventListener("resize", setupCanvas);
