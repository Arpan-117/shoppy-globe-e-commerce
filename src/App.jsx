import { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router"
import Header from './components/Header'
import Homepage from './pages/Homepage'
// import Cart from './components/Cart'
import ProductDetail from './components/ProductDetail'
import NotFound from './pages/NotFound'
import Checkout from './pages/Checkout'
import Payment from './pages/Payment'

const Cart = lazy(() => import('./components/Cart'));

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Homepage />} />
          {/* <Route path='cart' element={<Cart />} /> */}
          <Route path='product-details/:productId' element={<ProductDetail />} />
          <Route path='cart' element={<Suspense fallback=<div>Loading...</div> > <Cart /> </Suspense>} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='payment' element={<Payment />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
