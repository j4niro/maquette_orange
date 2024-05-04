import React from 'react'
import Card_foot from './card_foot'

function Foot() {
  return (
    <div style={{display : 'flex', justifyContent :'space-between'}}>
        <Card_foot titre={'welcome'} source='src\assets\Building Blocks\atom_primaryicon_grid_filled.png'/>
        <Card_foot titre={'Marketplace'} source='src\assets\Building Blocks\icon-container.png'/>
        <Card_foot titre={'mobile'} source='src\assets\Building Blocks\icon-container-1.png'/>
        <Card_foot titre={'My wallet'} source='src\assets\Building Blocks\icon-container-2.png'/>
        <Card_foot titre={'My points'} source='src\assets\Building Blocks\icon-container-3.png'/>
    </div>
  )
}

export default Foot