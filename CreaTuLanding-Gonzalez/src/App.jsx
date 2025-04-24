import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer message="¡Bienvenido a TecnoStore!  Descubrí nuestros productos" />
    </>
  );
}

export default App;
