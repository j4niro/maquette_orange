import React from 'react'

function Card_foot({titre, source=''}) {
  return (
    <div className='cardContainer' style={{display :'flex', flexDirection : 'column', alignItems : 'center'}}>
        <div style={{ width: '60px', height: '60px', borderRadius : '10px', display : 'flex', justifyContent : 'center'}}>
            <img src={source} alt="" height={40} width={70} style = {{margin : 'auto 8px'}}/>
        </div>
        <p style={{display : 'block', fontSize : '10px', textAlign: 'center'}}>{titre}</p>
    </div>
  )
}

export default Card_foot