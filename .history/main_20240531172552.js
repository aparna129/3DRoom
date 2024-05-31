// Import Three.js
import * as THREE from 'three';

// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create room geometry
const roomGeometry = new THREE.BoxGeometry(20, 10, 50);
const roomMaterial = new THREE.MeshBasicMaterial({ color: 0xCCCCCC, wireframe: true });
const room = new THREE.Mesh(roomGeometry, roomMaterial);
scene.add(room);

// Define object types and their dimensions
const objectTypes = [
  { name: 'table', width: 2, height: 1, depth: 1 },
  { name: 'chair', width: 1, height: 1.5, depth: 1 },
  { name: 'couch', width: 4, height: 2, depth: 2 },
  // Add more object types as needed
];

// Randomly place objects in the room
const roomArea = 1000; // sqft
const numObjects = 10;
const objects = [];
for (let i = 0; i < numObjects; i++) {
  const objectType = objectTypes[Math.floor(Math.random() * objectTypes.length)];
  const objectGeometry = new THREE.BoxGeometry(objectType.width, objectType.height, objectType.depth);
  const objectMaterial = new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff });
  const object = new THREE.Mesh(objectGeometry, objectMaterial);

  // Randomly position object within the room
  const x = Math.random() * 20 - 10; // Room width
  const y = Math.random() * 10; // Room height
  const z = Math.random() * 50 - 25; // Room depth
  object.position.set(x, y, z);

  objects.push(object);
  scene.add(object);
}

// Set camera position
camera.position.z = 30;
camera.position.y = 5;

// Render loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

