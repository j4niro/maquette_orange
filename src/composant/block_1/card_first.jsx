import React from 'react'

function Card_first({titre}) {
  return (
    <div>
        <div className='cardContainer' style={{ width: '170px', height :'100px', backgroundColor : '#333132',marginRight:'15px', borderRadius : '10px'}}>
            <div>
            <img src="src\assets\logo_orange.png" alt="" height={13} width={13} style = {{margin : '5px 8px'}}/>
            </div>
            <h3 style ={{fontSize : '12px', color : 'white', marginLeft : '5px', marginTop : '10px'}}>{titre}</h3>
            <div>
                <p style={{fontSize : '12px', color : 'white', marginLeft : '5px', display : 'inline'}}>***** FCFA</p>
                <img src="src\assets\icon.png" alt="" height={20} width={20} style ={{marginLeft : '70px'}} />
            </div>
        </div>
    </div>
  )
}

export default Card_first