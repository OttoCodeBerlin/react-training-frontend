import React from 'react'

export default function DriverCard(props) {
  function getRating(x) {
    switch (Math.round(x)) {
      case 5:
        return (
          <div>
            <h2 style={{ margin: '0' }}> &#10029;&#10029;&#10029;&#10029;&#10029;</h2>
          </div>
        )
      case 4:
        return (
          <div style={{ margin: '0' }}>
            <h2 style={{ margin: '0' }}> &#10029;&#10029;&#10029;&#10029;&#10025;</h2>
          </div>
        )
      case 3:
        return (
          <div style={{ margin: '0' }}>
            <h2 style={{ margin: '0' }}> &#10029;&#10029;&#10029;&#10025;&#10025;</h2>
          </div>
        )
      case 2:
        return (
          <div style={{ margin: '0' }}>
            <h2 style={{ margin: '0' }}> &#10029;&#10029;&#10025;&#10025;&#10025;</h2>
          </div>
        )
      case 1:
        return (
          <div style={{ margin: '0' }}>
            <h2 style={{ margin: '0' }}> &#10029;&#10025;&#10025;&#10025;&#10025;</h2>
          </div>
        )
      default:
        return (
          <div style={{ margin: '0' }}>
            <h2 style={{ margin: '0' }}> &#10025;&#10025;&#10025;&#10025;&#10025;</h2>
          </div>
        )
    }
  }

  return (
    <div
      style={{
        background: '#4E7BC6',
        width: '600px',
        height: '130px',
        borderRadius: '18px',
        margin: '10px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          margin: '10px',
          width: '200px',
        }}
      >
        <div style={{ position: 'relative', width: '90px', height: '90px', overflow: 'hidden', borderRadius: '50%' }}>
          <img src={props.img} alt="Driver" style={{ width: '140px', height: 'auto', marginLeft: '-30px' }} />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '400px',
        }}
      >
        <h3 style={{ margin: '0' }}>{props.name}</h3>
        {getRating(props.rating)}
        <h4 style={{ margin: '0' }}>
          {props.car.model} - {props.car.licensePlate}
        </h4>
      </div>
    </div>
  )
}
