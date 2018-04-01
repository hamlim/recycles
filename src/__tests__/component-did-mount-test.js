import React from 'react'
import { render } from 'react-testing-library'
import ComponentDidMount from '../component-did-mount'

test('it calls children in did mount', () => {
  const children = jest.fn()
  render(<ComponentDidMount>{children}</ComponentDidMount>)
  expect(children).toHaveBeenCalledTimes(1)
})

test('if provided a callback, children can render content', () => {
  const callback = jest.fn()
  const { getByTestId } = render(
    <ComponentDidMount callback={callback}>
      {() => <div data-testid="div">Content</div>}
    </ComponentDidMount>,
  )
  expect(getByTestId('div').textContent).toBe('Content')
})
