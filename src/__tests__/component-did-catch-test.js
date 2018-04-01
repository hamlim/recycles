import React from 'react'
import { render } from 'react-testing-library'
import ComponentDidCatch from '../component-did-catch'

// Workaround react bug, see: https://github.com/facebook/react/issues/12485
const pauseErrorLogging = codeToRun => {
  const logger = console.error
  console.error = () => {}

  codeToRun()

  console.error = logger
}

class ThrowError extends React.Component {
  render() {
    throw Error('Error!')
    return null
  }
}

class HandleError extends React.Component {
  constructor() {
    super()
    this.state = {
      hasError: false,
    }
  }
  render() {
    return (
      <ComponentDidCatch
        {...this.props}
        callback={(...args) => {
          this.props.callback(...args)
          this.setState({ hasError: true })
        }}
      >
        {this.props.children(this.state.hasError)}
      </ComponentDidCatch>
    )
  }
}

test('it calls the callback in componentDidCatch', () => {
  pauseErrorLogging(() => {
    const callback = jest.fn()
    render(
      <HandleError callback={callback}>
        {hasError =>
          hasError
            ? () => <div data-testid="error">Error</div>
            : () => <ThrowError />
        }
      </HandleError>,
    )
    expect(callback).toHaveBeenCalledTimes(1)
  })
})

test('if provided a callback, children can render content', () => {
  pauseErrorLogging(() => {
    const callback = jest.fn()
    const { getByTestId } = render(
      <HandleError callback={callback}>
        {hasError =>
          hasError
            ? () => <div data-testid="error">Error</div>
            : () => <ThrowError />
        }
      </HandleError>,
    )
    expect(getByTestId('error').textContent).toBe('Error')
  })
})

test('it throws an error when not handled', () => {
  pauseErrorLogging(() => {
    const throwsError = () =>
      render(
        <HandleError callback={() => {}}>
          {hasError => () => <ThrowError />}
        </HandleError>,
      )
    expect(throwsError).toThrowErrorMatchingSnapshot()
  })
})
