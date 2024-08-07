
import './App.css'
import MainDash from './components/MainDash/MainDash'
import Navbar from './components/Navbar/Navbar'
import RightSIde from './components/RightSide/RightSIde'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <>
     <div className="AppBg">
     <Navbar />
     <div className="App">
    
      <div className="AppGlass">
        
        <Sidebar />
        <MainDash />
        <RightSIde />
      </div>
     </div>
     </div>
    </>
  )
}

export default App
