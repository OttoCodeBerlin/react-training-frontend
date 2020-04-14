import React from 'react'

export default function IdCard(props) {
  return (
    <div style={{ width: '500px', height: '150px', border: '2px black solid', margin: '10px' }}>
      <img style={{ width: '130px', height: '130px', margin: '10px' }} src={props.picture} alt="Whatever" />
      <span style={{ display: 'inline-block', width: '300px', height: '130px', position: 'absolute' }}>
        <p style={{ margin: '15px 0 0 0' }}>First Name: {props.firstName}</p>
        <p style={{ margin: '0' }}>Last Name: {props.lastName}</p>
        <p style={{ margin: '0' }}>Height: {props.height} cm</p>
        <p style={{ margin: '0' }}>DoB: {props.birth.toDateString()}</p>
        <p style={{ margin: '0' }}>Gender: {props.gender}</p>
      </span>
    </div>
  )
}
