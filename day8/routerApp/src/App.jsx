import { NavLink } from 'react-router-dom'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import Support from './component/Support'
import Found from './component/Not-found'
import Lab from './component/Labs'
import About from './component/about'
import MainHeader from './component/MainHeader'

function App() {
 

  return (
    <>
     <div>
      <div>
        <nav>
          <ul>
           <li><NavLink to={'/' }>Home</NavLink></li>
           <li><NavLink to={'/about'}>about</NavLink></li>
           <li><NavLink to={'/support'}>support</NavLink></li>
           <li><NavLink to={'/labs'}>labs</NavLink></li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<MainHeader/>}>
        <Route path='/about' element={<About></About>}/>
        <Route index element={<Home></Home>}/>
        <Route path='/support' element={<Support></Support>}/>
        <Route path='/labs' element={<Lab></Lab>}/>
        <Route path='*' element={<Found></Found>}/>
        </Route>
      </Routes>
     </div>
    </>
  )
}

export default App
