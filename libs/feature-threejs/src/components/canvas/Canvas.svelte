<script lang="ts">
  import * as THREE from 'three';

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerWidth,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  let cameraRotation = 5;
  let xRotation = 0.01;
  let yRotation = 0.01;
  function animate() {
    requestAnimationFrame(animate);
    camera.position.z = cameraRotation;

    cube.rotation.x += xRotation;
    cube.rotation.y += yRotation;
    renderer.render(scene, camera);
  }
</script>

<button on:click={animate}>Begin Animation</button>

<div>
  <label for="rotate-x">Increase X Axis Speed</label>

  <input
    type="range"
    id="rotate-x"
    name="rotate-x"
    min="0"
    max=".05"
    step=".01"
    bind:value={xRotation}
  />
  <label for="rotate-y">Increase y Axis Speed</label>

  <input
    type="range"
    id="rotate-y"
    name="rotate-y"
    min="0"
    max=".05"
    step=".01"
    bind:value={yRotation}
  />
  <label for="rotate-y">rotate camera z axis</label>

  <input
    type="range"
    id="camera"
    name="camera"
    min="0"
    max="15"
    step="1"
    bind:value={cameraRotation}
  />
</div>

<style>
</style>
