import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Booking from './pages/booking/Booking';
import Destinations from './pages/destinations/Destinations';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/inicio" />} />
        <Route path='/inicio' element={<Home />} />
        <Route path='/reservas' element={<Booking />} />
        <Route path='/destinos' element={<Destinations/>} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
