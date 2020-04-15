import React, { Component } from 'react'
import diceEmpty from '../img/dice-empty.png'
import dice1 from '../img/dice1.png'
import dice2 from '../img/dice2.png'
import dice3 from '../img/dice3.png'
import dice4 from '../img/dice4.png'
import dice5 from '../img/dice5.png'
import dice6 from '../img/dice6.png'

export default class Dice extends Component {
  constructor(props) {
    super(props)

    this.state = {
      curDice: Math.floor(Math.random() * 6) + 1,
    }

    this.diceClick = this.diceClick.bind(this)
    this.getRandomPicture = this.getRandomPicture.bind(this)
  }

  getRandomPicture = function () {
    const rV = Math.floor(Math.random() * 6) + 1
    return rV
  }

  diceClick = function (e) {
    e.preventDefault()
    this.setState({ curDice: 0})

    setTimeout(function () {
     this.setState({curDice: Math.floor(Math.random() * 6) + 1})
    }.bind(this), 1000)
    
  }

  render() {
    const srcs = this.state.curDice
    let sourcePath
    switch (srcs) {
      case 1:
        sourcePath = dice1
        break
      case 2:
        sourcePath = dice2
        break
      case 3:
        sourcePath = dice3
        break
      case 4:
        sourcePath = dice4
        break
      case 5:
        sourcePath = dice5
        break
      case 6:
        sourcePath = dice6
        break
      default:
        sourcePath = diceEmpty
    }

    return (
      <div style={{ margin: '10px', height: '100px', width: '100px' }}>
        <img
          src={sourcePath}
          style={{ height: '100px', width: 'auto' }}
          alt="Dice"
          onClick={(e) => this.diceClick(e)}
        />
      </div>
    )
  }
}
