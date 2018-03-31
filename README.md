# Recycles ♻️

Recycles is a simple React render-prop component library providing access to several React component lifecycle methods.

All of the exported components accept an optional `callback` prop and a `children` prop. Both of these are functions, and the components will return null if `callback` is undefined, otherwise they return `this.props.children()`.

## Example:

```jsx
import { ComponentDidMount } from 'recycles'

render(
  <Fragment>
    <ComponentDidMount>
      {() => {
        // if your app was server side rendered, this only gets evaluated on the client
        window.startTrackingOrSomething()
      }}
    </ComponentDidMount>
    <App />
  </Fragment>,
)
```
