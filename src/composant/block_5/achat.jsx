import React from 'react'
import Card_2 from '../block_2/card_2'

function Achat() {
  return (
    <div>
        <div style = {{marginTop : '20px'}}>
        <h2 style={{fontSize : '19px', fontWeight : 'bold', marginLeft : '18px'}}>Mes achats</h2>
        <div style = {{display : 'flex', alignItems : 'center', marginTop:'20px'}}>
        <Card_2 titre = {'Mes services'} source="src\assets\atom_secondaryicon_myservices.png"/>
        <Card_2 titre = {'Tickets'} source="src\assets\atom_secondaryicon_mytickets.png"/>
        </div>
    </div>
    </div>
  )
}

export default Achat