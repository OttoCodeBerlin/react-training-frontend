import React from 'react'

export default function Rating(props) {
  switch (Math.round(props.children)) {
    case 5:
      return (
        <div style={{ marginLeft: '10px' }}>
          <h1> &#10029;&#10029;&#10029;&#10029;&#10029;</h1>
        </div>
      )
    case 4:
      return (
        <div style={{ marginLeft: '10px' }}>
          <h1> &#10029;&#10029;&#10029;&#10029;&#10025;</h1>
        </div>
      )
    case 3:
      return (
        <div style={{ marginLeft: '10px' }}>
          <h1> &#10029;&#10029;&#10029;&#10025;&#10025;</h1>
        </div>
      )
    case 2:
      return (
        <div style={{ marginLeft: '10px' }}>
          <h1> &#10029;&#10029;&#10025;&#10025;&#10025;</h1>
        </div>
      )
    case 1:
      return (
        <div style={{ marginLeft: '10px' }}>
          <h1> &#10029;&#10025;&#10025;&#10025;&#10025;</h1>
        </div>
      )
    default:
      return (
        <div style={{ marginLeft: '10px' }}>
          <h1> &#10025;&#10025;&#10025;&#10025;&#10025;</h1>
        </div>
      )
  }
}
