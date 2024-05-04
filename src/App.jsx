
import Bienvenu from './composant/block_1/Bienvenu'
import NavBarOrange from './composant/navBar/NavBar'
import Features from './composant/block_2/features'
import Services from './composant/block_3/services'
import Payer from './composant/block_4/payer'
import Achat from './composant/block_5/achat'
import Help from './composant/block_6/Help'
import Foot from './composant/foot/Foot'

function App() {
  return (
  <div style={{margin : '0 20px', fontFamily : 'Roboto'}}>
  <NavBarOrange />
  <Bienvenu/>
  <Features />
  <Services />
  <Payer />
  <Achat />
  <Help />
  <Foot />
  </div>
  )
}

export default App
