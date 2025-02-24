import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Booking from './pages/booking/Booking';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path='/booking' element={<Booking />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
