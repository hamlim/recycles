import React from 'react'
import { render } from 'react-testing-library'
import ComponentDidUpdate from '../component-did-update'

test('it calls children in did update', () => {
  const children = jest.fn()
  const { container } = render(
    <ComponentDidUpdate>{children}</ComponentDidUpdate>,
  )
  render(
    <ComponentDidUpdate>{children}</ComponentDidUpdate>,
    { container },
  )
  expect(children).toHaveBeenCalledTimes(1)
})

test('if provided a callback, children can render content', () => {
  const callback = jest.fn()
  const { getByTestId } = render(
    <ComponentDidUpdate callback={callback}>
      {() => <div data-testid="div">Content</div>}
    </ComponentDidUpdate>,
  )
  expect(getByTestId('div').textContent).toBe('Content')
})
