import { Component } from 'react'

export default class ComponentDidCatch extends Component {
  componentDidCatch(...args) {
    if (this.props.callback !== null) {
      this.props.callback(...args)
    } else {
      this.props.children(...args)
    }
  }
  render() {
    if (this.props.callback !== null) {
      return this.props.children()
    } else {
      return null
    }
  }
}
ComponentDidCatch.defaultProps = {
  callback: null,
}
