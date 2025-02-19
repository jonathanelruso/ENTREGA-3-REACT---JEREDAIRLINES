import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Navigate to="/home"/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
