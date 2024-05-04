import React from 'react'
import Card_first from './card_first'

function Bienvenu() {
  return (
    <div>
        <h2 style={{fontSize : '19px', fontWeight : 'bold'}}>Bienvenue, +225 0769593238</h2>
        <div style={{display : 'flex'}}>
        <Card_first titre={'Compte principal'}/> <Card_first titre={'Solde actuel'}/>
        </div>
    </div>
  )
}

export default Bienvenu