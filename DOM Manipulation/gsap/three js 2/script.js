const scene = new THREE.Scene();
scene.background = new THREE.Color(0x151320);

const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(60, 10, 50);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    powerPreference: "high-performance",
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.querySelector(".garage").appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 0);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xcc8ee8, 1.5);
directionalLight.position.set(5, 5, 5);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 2048;
directionalLight.shadow.mapSize.height = 2048;
scene.add(directionalLight);

const pointLight = new THREE.PointLight(0xffd600, 3, 50);
pointLight.position.set(4.5, 25, 25); // Fixed: ">" typo removed
pointLight.decay = 5;
scene.add(pointLight);

const pointLight2 = new THREE.PointLight(0xea00ff, 1.25, 0);
pointLight2.position.set(-100, 65.5, 20);
pointLight2.decay = 2;
scene.add(pointLight2);

const pointLight3 = new THREE.PointLight(0xff4c00, 2.5, 50); // Fixed: color typo (0xff4c0 → 0xff4c00)
pointLight3.position.set(10, -10, -25);
pointLight3.decay = 2;
scene.add(pointLight3);

const pointLight4 = new THREE.PointLight(0xffd600, 3, 47);
pointLight4.position.set(52, -25, 25);
pointLight4.decay = 0.5;
scene.add(pointLight4);

const composer = new THREE.EffectComposer(renderer);
const renderPass = new THREE.RenderPass(scene, camera);
composer.addPass(renderPass);

const bloomPass = new THREE.UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.6,
    1,
    0.1
);

composer.addPass(bloomPass);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05; // Fixed: "dampingfactor" → "dampingFactor"
controls.minDistance = 10;
controls.maxDistance = 50;

const createEmissiveMaterial = (color, intensity = 2) => {
    return new THREE.MeshStandardMaterial({
        color: color, // Fixed: "Color" → "color"
        emissive: color,
        emissiveIntensity: intensity,
        toneMapped: false,
    });
};

const loader = new THREE.GLTFLoader();
loader.load("asset/gas_station/scene.gltf", function (gltf) {
    const model = gltf.scene;

    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    model.position.sub(center);

    scene.add(model);
});

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    composer.render();
}

animate();


Shery.mouseFollower({
  //Parameters are optional.
//   skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


