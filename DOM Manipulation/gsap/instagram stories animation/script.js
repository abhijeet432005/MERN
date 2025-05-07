const lenis = new Lenis()
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => {
 lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)

const scene = new THREE.Scrne();
scene.background = new THREE.color(0xfedfd);

const camera = new THREE.PrespectiveCamera(
    75, 
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)

const renderer = new THREE.WebGLRenderer({
    antialise: true,
    alpha: true,

})

renderer.setClearColor(0xffffff, 1);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.SetPixelRario(window.devicePixelRatio);
renderer.shaodowMap.enable = true;
renderer.shaodowMap.type = THREE.PCFSoftShadowMap;
