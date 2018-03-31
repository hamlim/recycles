import { Component } from 'react'

export default class ComponentDidUpdate extends Component {
  componentDidUpdate() {
    if (this.props.callback != null) {
      this.props.callback()
    } else {
      this.props.children()
    }
  }
  render() {
    if (this.props.callback != null) {
      return this.props.children()
    } else {
      return null
    }
  }
}
