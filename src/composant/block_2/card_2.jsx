import React from 'react'

function Card_2({titre, source=''}) {
  return (
    <div className='cardContainer' style={{margin : '0 10px',  display :'flex', flexDirection : 'column', alignItems : 'center'}}>
        <div style={{ width: '70px', height: '70px', backgroundColor : '#eeeeee', borderRadius : '10px', display : 'flex', justifyContent : 'center'}}>
            <img src={source} alt="" height={40} width={40} style = {{margin : 'auto 8px'}}/>
        </div>
        <p style={{display : 'block', fontSize : '10px', textAlign: 'center'}}>{titre}</p>
    </div>
  )
}

export default Card_2