import React from 'react'

export default function Random(props) {
  const max=Number(props.max)
  const min=Number(props.min)
  const random=Math.floor((Math.random()*(max-min)+min))
  return (
    <div style={{ width: '480px', height: '58px', border: '2px black solid', margin: '10px', paddingLeft: '20px' }}>
      <h4>Random value between {min} and {max} => {random}</h4>
    </div>
  )
}
