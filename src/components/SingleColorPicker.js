import React, { Component } from 'react'

export default class SingleColorPicker extends Component {
  render() {
    if (this.props.color === 'r') {
      return (
        <div style={{ margin: '10px', display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: '50px',
              height: '50px',
              border: '2px solid black',
              backgroundColor: `rgb(${this.props.value},0,0)`,
              display: 'inline-block',
            }}
          ></div>
          <h4
            style={{
              display: 'inline-block',
              margin: '5px',
            }}
          >
            R:
          </h4>
          <input
            style={{
              display: 'inline-block',
            }}
            type="number"
            name="rValue"
            value={this.props.value}
            id="r"
            onChange={(e) => this.props.onChange(e,e.target.value)}
          />
        </div>
      )
    } else if (this.props.color === 'g') {
      return (
        <div style={{ margin: '10px', display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: '50px',
              height: '50px',
              border: '2px solid black',
              backgroundColor: `rgb(0,${this.props.value},0)`,
              display: 'inline-block',
            }}
          ></div>
          <h4
            style={{
              display: 'inline-block',
              margin: '5px',
            }}
          >
            G:
          </h4>
          <input
            style={{
              display: 'inline-block',
            }}
            type="number"
            name="gValue"
            value={this.props.value}
            id="g"
            onChange={(e) => this.props.onChange(e,e.target.value)}
          />
        </div>
      )
    } else {
      return (
        <div style={{ margin: '10px', display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: '50px',
              height: '50px',
              border: '2px solid black',
              backgroundColor: `rgb(0,0,${this.props.value})`,
              display: 'inline-block',
            }}
          ></div>
          <h4
            style={{
              display: 'inline-block',
              margin: '5px',
            }}
          >
            B:
          </h4>
          <input
            style={{
              display: 'inline-block',
            }}
            type="number"
            name="bValue"
            value={this.props.value}
            id="b"
            onChange={(e) => this.props.onChange(e,e.target.value)}
          />
        </div>
      )
    }
  }
}
