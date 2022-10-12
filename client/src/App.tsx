import React from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SingleProduct from "./components/SingleProduct"

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
