import React from 'react'

export default function NumbersTable(props) {
  const createGrid = (input) => {
    let table = []

    for (let i = 0; i < input; i++) {
      i % 2 === 0
        ? table.push(
            <div
              key={i}
              style={{
                width: '95px',
                height: '95px',
                border: '2px solid black',
                display: 'inline-block',
                backgroundColor: 'red',
              }}
            >
              <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '14px' }}>
                {i + 1}
              </h2>
            </div>
          )
        : table.push(
            <div key={i} style={{ width: '95px', height: '95px', border: '2px solid black', display: 'inline-block' }}>
              <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '14px' }}>
                {i + 1}
              </h2>
            </div>
          )
    }
    return table
  }

  const newGrid = createGrid(props.limit)

  return (
    <div
      style={{
        width: '500px',
        margin: '10px',
      }}
    >
      {newGrid}
    </div>
  )
}
