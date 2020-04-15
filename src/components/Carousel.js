import React, { Component } from 'react'

export default class Carousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      imgIdx: 0,
    }

    this.imgClickPlus = this.imgClickPlus.bind(this)
    this.imgClickMinus = this.imgClickMinus.bind(this)
  }

  imgClickPlus = function (e) {
    e.preventDefault()
    const imgMax = this.props.imgs.length - 1
    this.state.imgIdx === imgMax ? this.setState({ imgIdx: 0 }) : this.setState({ imgIdx: this.state.imgIdx + 1 })
  }

  imgClickMinus = function (e) {
    e.preventDefault()
    const imgMax = this.props.imgs.length - 1
    this.state.imgIdx === 0 ? this.setState({ imgIdx: imgMax }) : this.setState({ imgIdx: this.state.imgIdx - 1 })
  }

  render() {
    return (
      <div style={{margin: '10px'}}>
        <img src={this.props.imgs[this.state.imgIdx]} alt="Carousel Images" />
        <div>
          <button style={{ width: '64px' }} onClick={(e) => this.imgClickMinus(e)}>
            Left
          </button>
          <button style={{ width: '64px' }} onClick={(e) => this.imgClickPlus(e)}>
            Right
          </button>
        </div>
      </div>
    )
  }
}
