
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Brand from './pages/Brand'
import Afzalliklar from './pages/afzalliklar'
import OpenClub from './pages/openClub'
import Contacts from './pages/Contacts'

function App() {

  return (
    <div className='container' >
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/brand' element={< Brand />} />
        <Route path='/afzalliklar' element={< Afzalliklar />} />
        <Route path='/openclub' element={< OpenClub />} />
        <Route path='/contacts' element={< Contacts />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
