import Nav from "./components/Nav"
import Product from "./components/Product"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductDetails from "./components/ProductDetails"
import Search from "./components/Search"
import Cart from "./components/Cart"
import { items } from "./components/Data"
import { useState } from "react"

const App = () => {
  const [data,setdata]=useState([...items])
  const [cart,setCart]=useState([])


  return (
    <>
      <Router>
        <Nav cart={cart} setdata={setdata} />
        <Routes>
          <Route path="/" element={<Product cart={cart} setCart={setCart} items={data}/>}/>
          <Route path="/product/:id" element={<ProductDetails cart={cart} setCart={setCart}/>}/>
          <Route path="/search/:term" element={<Search cart={cart} setCart={setCart}/>}/>
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
