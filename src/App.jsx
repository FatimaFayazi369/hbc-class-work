// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'
// import Stundentcard from './studentcard'
// import ProductCart from './productcart'
// import Messages from './counter'
// import Product from './product'
// import Laptop from './assets/laptop.jpg'
// import Form from './form'
// import { Route, Routes } from 'react-router-dom'
// import Home from './home'
// import Navebar from './navebar'
// import Products from './products'
// function App() {


//   return (
//     <>
//     {/* <Stundentcard/> */}
//     {/* <ProductCart name="laptop"  category={'bestseller'}  /> */}
//     {/* <Messages/> */}
//     {/* <Product intquantity={1} name="laptop" price={43} category='bestseller'
//     image = {Laptop}
//    /> */}
//    <Navebar/>
//    <Routes>
//     <Route path='/home' element={<Home/>}/>
  
//     <Route path="/form" element={<Form />} />
//     <Route path='/message' element={<Messages/>}/>
//       <Route path='/product' element={<Product/>}/>
//       <Route path='/products' element={<Products/>}/>
      
//    </Routes>
  
//     </>
//   )
// }

// export default App

import Users from "./users"
function App(){
  return(
    <>
    <Users/>
    </>
  )
}

export default App
