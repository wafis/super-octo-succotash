import canvas from './canvas.svelte'
import { render } from '@testing-library/svelte'

it('it works', async () => {
  const { getByText } = render(canvas)

  expect(getByText('Hello component!'));
})
