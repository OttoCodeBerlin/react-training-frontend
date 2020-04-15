import React, { Component } from 'react'

export default class ClickablePicture extends Component {
  constructor(props) {
    super(props)

    this.state = {
      imgClicked: false,
    }

    this.imgClick = this.imgClick.bind(this)
  }

  imgClick = function (e) {
    e.preventDefault()
    this.setState({ imgClicked: !this.state.imgClicked })
  }

  render() {
    return (
      <div style={{ margin: '10px', height: '100px', width: '100px' }}>
        {this.state.imgClicked ? (
          <img
            src={this.props.imgClicked}
            style={{ height: '100px', width: 'auto' }}
            alt="Dude"
            onClick={(e) => this.imgClick(e)}
          />
        ) : (
          <img
            src={this.props.img}
            style={{ height: '100px', width: 'auto' }}
            alt="Dude"
            onClick={(e) => this.imgClick(e)}
          />
        )}
      </div>
    )
  }
}
