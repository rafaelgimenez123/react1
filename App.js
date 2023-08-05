import Navbar from "./Navbar"
import Precios from "./pages/Precios"
import Home from "./pages/Home"
import Acercade from "./pages/Acercade"


function App() {
  let component 
switch(window.localStorage.pathname){
  case "/":
    component = <Home />
    break
  case"/precios":
  component = <Precios />
    break
 case"/Acerca de":
 component = <Acercade />
  break
}
  return(
   <><Navbar/>
  {component}
  </>
  )
}
export default App