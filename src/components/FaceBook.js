import React, { Component } from 'react'
import profiles from '../data/berlin.json'

export default class FaceBook extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeCountry: 'All',
    }
  }

  render() {
    const table = []
    const buttonTable = [
      <button key={0}
        onClick={(e) => {
          e.preventDefault()
          this.setState({ activeCountry: 'All' })
        }}
      >
        All
      </button>,
    ]
    let countries = []
    for (let i = 0; i < profiles.length; i++) {
      let bckColor
      profiles[i].country === this.state.activeCountry ? (bckColor = 'lightblue') : (bckColor = 'white')

      countries.push(profiles[i].country)
      table.push(
        <div
          style={{
            width: '500px',
            height: '100px',
            border: '2px black solid',
            margin: '10px',
            backgroundColor: bckColor,
          }}
          key={i}
        >
          <img style={{ width: '80px', height: '80px', margin: '10px' }} src={profiles[i].img} alt="Whatever" />
          <span style={{ display: 'inline-block', width: '300px', height: '130px', position: 'absolute' }}>
            <p style={{ margin: '0' }}>First Name: {profiles[i].firstName}</p>
            <p style={{ margin: '0' }}>Last Name: {profiles[i].lastName}</p>
            <p style={{ margin: '0' }}>Country: {profiles[i].country}</p>
            {profiles[i].isStudent ? (
              <p style={{ margin: '0' }}>Type: Student</p>
            ) : (
              <p style={{ margin: '0' }}>Type: Teacher</p>
            )}
          </span>
        </div>
      )
    }
    countries = [...new Set(countries)]
    for (let i = 0; i < countries.length; i++) {
      let bckColor
      countries[i] === this.state.activeCountry ? (bckColor = 'lightblue') : (bckColor = 'white')

      buttonTable.push(
        <button key={i+1}
          onClick={(e) => {
            e.preventDefault()
            this.setState({ activeCountry: countries[i] })
          }}
          style={{ backgroundColor: bckColor }}
        >
          {countries[i]}
        </button>
      )
    }

    return (
      <div
        style={{
          width: '500px',
          margin: '10px',
        }}
      >
        {buttonTable}
        {table}
      </div>
    )
  }
}
