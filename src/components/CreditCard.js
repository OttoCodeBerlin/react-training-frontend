import React from 'react'
import visa from '../img/visa.png'
import masterCard from '../img/master-card.svg'

export default function CreditCard(props) {
  const color = props.bgColor
  const digits = props.number.slice(12)
  return (
    <div style={{ background: color, width: '350px', height: '195px', borderRadius: '18px', margin: '10px' }}>
      {props.type === 'Visa' ? (
        <div>
          <img
          src={visa}
          alt="Visa Logo"
          style={{ width: '75px', height: 'auto', position: 'relative', left: '260px', top: '18px' }}
        />
        <p style={{ fontSize: '42px', position: 'relative', left: '27px', top: '17px', letterSpacing: '-2px', color: props.color }}>
        &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;{' '}
        <small style={{ fontSize: '25px', top: '0px' }}>{digits}</small>
      </p>
      <p style={{  position: 'relative', left: '30px', top: '-25px', color: props.color }}>EXPIRES {props.expirationMonth}/{props.expirationYear} {'   '}{props.bank}  <br/> {props.owner}  </p>
        </div>
        
      ) : (
        <div>
           <img
          src={masterCard}
          alt="MC Logo"
          style={{ width: '75px', height: 'auto', position: 'relative', left: '260px', top: '18px' }}
        />
        <p style={{ fontSize: '42px', position: 'relative', left: '27px', top: '0px', letterSpacing: '-2px', color: props.color }}>
        &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;{' '}
        <small style={{ fontSize: '25px', top: '0px' }}>{digits}</small>
      </p>
      <p style={{  position: 'relative', left: '30px', top: '-43px', color: props.color }}>EXPIRES {props.expirationMonth}/{props.expirationYear} {'   '}{props.bank}  <br/> {props.owner}  </p>
       
        </div>
       
      )}
    
    </div>
  )
}
