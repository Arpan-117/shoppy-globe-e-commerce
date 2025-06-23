import './App.css'
import { BrowserRouter, Routes, Route } from "react-router"
import Header from './components/Header'
import Homepage from './pages/Homepage'
import Cart from './components/Cart'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Homepage />} />
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
