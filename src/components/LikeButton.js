import React, { Component } from 'react'

export default class LikeButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      likes: 0,
      bgCol: 'cornflowerblue',
      colorIdx: 0,
    }

    this.colorClick = this.colorClick.bind(this)
  }

  colorClick = function (e) {
    e.preventDefault()
    let likesCount = this.state.likes
    likesCount++
    this.state.colorIdx === 5 ? (this.setState({colorIdx: 0})) : (this.setState({colorIdx: this.state.colorIdx+1}))
    this.setState({ likes: likesCount })
  }

  render() {
    const colorArray = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    return (
      <div>
        <button
          onClick={(e) => this.colorClick(e)}
          style={{
            margin: '10px',
            height: '40px',
            width: '90px',
            backgroundColor: colorArray[this.state.colorIdx],
            color: 'white',
            fontSize: '20px',
          }}
        >
          {this.state.likes} Likes
        </button>
      </div>
    )
  }
}
