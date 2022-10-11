import React from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Container } from "@mui/material"
import Home from "./components/Home"

const App = () => {
  return (
    <>
      <Header/>
      <main style={{padding: '20px 0'}}>
        <Container>
          <Home/>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
