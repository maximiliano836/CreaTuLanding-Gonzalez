import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
      <NavBar/>
      <ItemListContainer message="¡Bienvenido a TecnoStore!  Descubrí nuestros productos" />
      </>
    </Router>
  );
}

export default App;
