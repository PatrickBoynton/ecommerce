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
          <h1>Welcome to the Store!</h1>
          <Home/>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
