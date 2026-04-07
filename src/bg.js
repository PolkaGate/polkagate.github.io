import * as THREE from 'three';
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise.js';

export function initBg(container, mode = 'dark') {
  const isLight = mode === 'light';
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 20;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(isLight ? 0xf7f1ea : 0x0f0f0f, 1);
  container.appendChild(renderer.domElement);

  // PARTICLES
  const particleCount = 2500;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 40;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: isLight ? 0x1b1917 : 0xffffff,
    size: 0.05,
    transparent: true,
    opacity: isLight ? 0.06 : 0.12,
  });

  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  // LINES
  const lineMaterial = new THREE.LineBasicMaterial({
    color: isLight ? 0x1b1917 : 0xffffff,
    opacity: isLight ? 0.018 : 0.03,
    transparent: true,
  });

  const maxDistance = 3;
  let lineMesh = null;

  function createLines() {
    const lineGeometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < maxDistance) {
          vertices.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          );
        }
      }
    }

    lineGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    if (lineMesh) scene.remove(lineMesh);
    lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);
  }

  createLines();

  // NOISE PARAMETERS
  const noise = new ImprovedNoise();
  const timeFactor = 0.0001;
  const speed = 0.01;

  function animate() {
    requestAnimationFrame(animate);

    const positionsAttr = particles.geometry.attributes.position;

    // Curl noise movement
    for (let i = 0; i < particleCount; i++) {
      const x = positionsAttr.array[i * 3];
      const y = positionsAttr.array[i * 3 + 1];
      const z = positionsAttr.array[i * 3 + 2];

      const nX = noise.noise(x * 0.05, y * 0.05, z * 0.05 + Date.now() * timeFactor);
      const nY = noise.noise(y * 0.05, z * 0.05, x * 0.05 + Date.now() * timeFactor);
      const nZ = noise.noise(z * 0.05, x * 0.05, y * 0.05 + Date.now() * timeFactor);

      positionsAttr.array[i * 3] += nX * speed;
      positionsAttr.array[i * 3 + 1] += nY * speed;
      positionsAttr.array[i * 3 + 2] += nZ * speed;
    }

    positionsAttr.needsUpdate = true;

    // Optional: rotate entire particle cloud
    particles.rotation.y += 0.0002;
    particles.rotation.x += 0.0001;

    createLines(); // update line connections
    renderer.render(scene, camera);
  }

  const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  window.addEventListener('resize', onResize);

  animate();

  return () => {
    window.removeEventListener('resize', onResize);
    renderer.dispose();
    container.removeChild(renderer.domElement);
  };
}
