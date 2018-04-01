import React from 'react'
import { render } from 'react-testing-library'
import ComponentWillUnmount from '../component-will-unmount'

class ToggleMount extends React.Component {
  render() {
    const { showComponent, ...props } = this.props
    return showComponent ? (
      <ComponentWillUnmount {...props} />
    ) : null
  }
}

test('it calls children in will unmount', () => {
  const children = jest.fn()
  const { container } = render(
    <ToggleMount showComponent>{children}</ToggleMount>,
  )
  render(
    <ToggleMount showComponent={false}>
      {children}
    </ToggleMount>,
    { container },
  )
  expect(children).toHaveBeenCalledTimes(1)
})

test('if provided a callback, children can render content', () => {
  const callback = jest.fn()
  const { getByTestId } = render(
    <ComponentWillUnmount callback={callback}>
      {() => <div data-testid="div">Content</div>}
    </ComponentWillUnmount>,
  )
  expect(getByTestId('div').textContent).toBe('Content')
})
