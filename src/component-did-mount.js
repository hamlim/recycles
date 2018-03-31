import { Component } from 'react'

export default class ComponentDidMount extends Component {
  componentDidMount() {
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
ComponentDidMount.defaultProps = {
  callback: null,
}
