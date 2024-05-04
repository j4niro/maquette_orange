import React from 'react'
import Card_2 from '../block_2/card_2'

function Payer() {
  return (
    <div style = {{marginTop : '20px'}}>
        <h2 style={{fontSize : '19px', fontWeight : 'bold', marginLeft : '18px'}}>Payer et transferer</h2>
        <div style = {{display : 'flex', justifyContent : 'space-between', alignItems : 'center', marginTop:'20px'}}>
        <Card_2 titre = {'SOS'} source="src\assets\SOS.png"/>
        <Card_2 titre = {'Transfert crédit'} source="src\assets\content.png"/>
        <Card_2 titre = {"Facture Orange"} source="src\assets\atom_quickicon_paybill.png"/>
        <Card_2 titre = {'Gerer ma Sim'} source="src\assets\logo_orange.png"/>
        </div>
    </div>
  )
}

export default Payer