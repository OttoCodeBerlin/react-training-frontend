import React from 'react'

export default function Greetings(props) {
  return (
    <div style={{ width: '480px', height: '58px', border: '2px black solid', margin: '10px', paddingLeft: '20px' }}>
      {(props.lang === 'de' && <h4>Hallo {props.children}</h4>) ||
        (props.lang === 'fr' && <h4>Bonjour {props.children}</h4>) ||
        (props.lang === 'es' && <h4>Hola {props.children}</h4>) || <h4>Hello {props.children}</h4>}
    </div>
  )
}
