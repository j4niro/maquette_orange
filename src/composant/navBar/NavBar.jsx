


function NavBarOrange() {
  return (
    <div className='container'>
        <header style={{display : 'flex', justifyContent : 'space-between', margin : '15px 0'}}> 
            <div>
                <a href=""><img src="src\assets\logo_orange.png" alt="" height={30} width={30}/></a>
            </div>
            <ul style={{display : 'flex', gap : '15px'}}>
                <li style={{listStyle : 'none'}}><a href="" ><img src="src\assets\icon-button-1.png" alt="" height={30} width={30}/></a></li>
                <li style={{listStyle : 'none'}}><a href=""><img src="src\assets\icon-button-2.png" alt="" height={30} width={30}/></a></li>
                <li style={{listStyle : 'none'}}><a href=""><img src="src\assets\icon-button-3.png" alt="" height={30} width={30}/></a></li>
                <li style={{listStyle : 'none'}}><a href=""><img src="src\assets\container.png" alt="" height={30} width={30}/></a></li>
            </ul>
        </header>
    </div>
  )
}

export default NavBarOrange;