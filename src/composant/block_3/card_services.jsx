import React from 'react'

function Card_services() {
  return (
    <div className='cardContainer' style={{width: '150px', margin : '0 10px',  display : 'flex', flexDirection : 'column', justifyContent : 'center'}}>
        <div style={{ width: '150px', height: '200px', backgroundColor : '#eeeeee', borderRadius : '10px', display : 'flex', justifyContent : 'center', backgroundImage : "url('src/assets/caf.png')", backgroundSize : 'cover', backgroundPosition :'center'}}>
            {/* <img src="src\assets\caf.png" alt="" width={'100%'} height= {'100%'} style = {{margin : '5px 8px',borderRadius : '10px'}}/> */}
        </div>
        <p style={{display : 'block', fontSize : '10px', textAlign : 'center'}}>Caf 2023 Match centre</p>
    </div>
  )
}

export default Card_services