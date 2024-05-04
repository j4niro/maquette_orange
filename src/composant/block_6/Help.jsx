import React from 'react'
import Card_2 from '../block_2/card_2'

function Help() {
  return (
    <div>
        <div style = {{marginTop : '20px'}}>
        <h2 style={{fontSize : '19px', fontWeight : 'bold', marginLeft : '18px'}}>Besoin d'aide ?</h2>
        <div style = {{display : 'flex', justifyContent : 'space-between', alignItems : 'center', marginTop:'20px'}}>
        <Card_2 titre = {'Assistance en ligne'} source="src\assets\atom_secondaryicon_faq.png"/>
        <Card_2 titre = {'Trouver une agence'} source="src\assets\atom_secondaryicon_bookspot.png"/>
        <Card_2 titre = {"Pharmacie de garde"} source="src\assets\logo_orange.png"/>
        <Card_2 titre = {'Parrainage'} source="src\assets\atom_quickicon_parainnage.png"/>
        </div>
    </div>
    </div>
  )
}

export default Help