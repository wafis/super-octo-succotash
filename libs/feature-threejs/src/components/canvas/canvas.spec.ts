import canvas from './canvas.svelte';
import { render } from '@testing-library/svelte';
import * as THREE from 'three';

import createCamera from '../../utils/test-utils';

it('it works', async () => {
  const camera = createCamera();

  expect(camera).toBeInstanceOf(THREE.PerspectiveCamera);
});

// still taking a look at how i can mock three's api
