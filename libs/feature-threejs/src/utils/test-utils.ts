import * as THREE from 'three';

const window = {
  innerWidth: 900,
  innerHeight: 670,
};

function createCamera(
  fov = 50,
  aspect = window.innerWidth / window.innerHeight,
  near = 1,
  far = 1000
) {
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

  return camera;
}

export default createCamera;
