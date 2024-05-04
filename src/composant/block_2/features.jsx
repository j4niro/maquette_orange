import React from 'react'
import Card_2 from './card_2'

function Features() {
  return (
    <div style = {{display : 'flex', justifyContent : 'space-between', alignItems : 'center', paddingTop:'30px'}}>
        <Card_2 titre = {'Recharger         '} source="src\assets\Group 1365.png"/>
        <Card_2 titre = {'Acheter un pass'} source="src\assets\Content image.png"/>
        <Card_2 titre = {"Transfert d'argent"} source="src\assets\Thumbnail.png"/>
        <Card_2 titre = {'Paiement marchant'} source="src\assets\Thumbnail-1.png"/>
    </div>
  )
}

export default Features