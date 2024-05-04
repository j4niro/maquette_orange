import React from 'react'
import Card_services from './card_services'
import Card_2 from '../block_2/card_2'

function Services() {
  return (
    <div>
        <h2 style={{fontSize : '19px', fontWeight : 'bold', marginLeft : '18px'}}>Services</h2>
        <div style = {{display : 'flex'}} >
            <Card_services /> 
            <div style={{width: '150px', display : 'flex', flexDirection : 'column', justifyContent : 'space-between'}} >
                <div style = {{display : 'flex'}}>
                    <Card_2 titre = {'Promo'} source='src\assets\atom_quickicon_deals.png'/>
                    <Card_2 titre = {"O'zen"} source='src\assets\atom_quickicon_ozen.png'/>
                </div>
                <div style = {{display : 'flex'}}>
                    <Card_2 titre = {'Ma SIM'} source='src\assets\Tracé 39.png'/>
                    <Card_2 titre = {'Live streaming'} source='src\assets\Tracé 25416.png'/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Services