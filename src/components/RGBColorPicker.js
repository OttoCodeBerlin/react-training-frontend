import React, { Component } from 'react'
import SingleColorPicker from './SingleColorPicker'

export default class RGBColorPicker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rValue: 0,
      gValue: 0,
      bValue: 0,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = function (e) {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <SingleColorPicker color="r" value={this.state.rValue} onChange={this.onChange} />
        <SingleColorPicker color="g" value={this.state.gValue} onChange={this.onChange} />
        <SingleColorPicker color="b" value={this.state.bValue} onChange={this.onChange} />
      </div>
    )
  }
}
