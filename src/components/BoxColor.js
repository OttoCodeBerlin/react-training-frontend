import React from 'react'

export default function BoxColor(props) {
  const { r, g, b } = props
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  return (
    <div
      style={{
        width: '500px',
        height: '120px',
        border: '2px black solid',
        margin: '10px',
        backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')',
        textAlign: 'center'
      }}
    >
      <div> <h2>{`rgb(${r},${g},${b})`}</h2></div>
      <div><h3>{rgbToHex(r,g,b)}</h3></div>
      
    </div>
  )
}
