import React from 'react';
import './App.css';
import Header from "./components/pages/Header"
import Footer from "./components/pages/Footer"
import Home from "./components/pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SingleProduct from "./components/productDetails/SingleProduct"

const App = () => {
  return (
    <Router>
      <Header/>
      <main style={{padding: '20px 0'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product/:id" element={<SingleProduct/>}/>
          </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
