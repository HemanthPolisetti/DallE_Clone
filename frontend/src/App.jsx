import './App.css'
import {Homepage,Createpage, Navbar} from './Pages'
import {Routes ,Route} from 'react-router-dom'
function App() {

  return (
    <>
    <Navbar />
    <Routes>
    <Route path='/' element={<Homepage />} exact/>
    <Route path='/create' element={<Createpage />} exact/>
    </Routes>
    </>
  )
}

export default App
