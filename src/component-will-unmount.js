import { Component } from 'react'

export default class ComponentWillUnmount extends Component {
  componentWillUnmount() {
    if (this.props.callback !== null) {
      this.props.callback()
    } else {
      this.props.children()
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
ComponentWillUnmount.defaultProps = {
  callback: null,
}
