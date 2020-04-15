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

  handleChange = function (e,target) {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <SingleColorPicker color="r" value={this.state.rValue} onChange={this.handleChange} />
        <SingleColorPicker color="g" value={this.state.gValue} onChange={this.handleChange} />
        <SingleColorPicker color="b" value={this.state.bValue} onChange={this.handleChange} />
        <div style={{ margin: '10px', display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: '50px',
              height: '50px',
              border: '2px solid black',
              backgroundColor: `rgb(${this.state.rValue},${this.state.gValue}, ${this.state.bValue})`,
              display: 'inline-block',
            }}
          ></div>
          <h4
            style={{
              display: 'inline-block',
              margin: '5px',
            }}
          >
            
            rgb({this.state.rValue},{this.state.gValue}, {this.state.bValue})
          </h4>
      </div>
      
      </div>
    )
  }
}
