import React from 'react';
import CartWidget from './CartWidget';
import '../css/NavBar.css';

const NavBar = () => {
  return (
    <nav className='NavBar'>
      <a href="/"><h1>TecnoStore</h1></a>
      <a href="#">Inicio</a>
      <a href="#">Productos</a>
      <a href="#">Contacto</a>
      <a href="#"><CartWidget /></a>
    </nav>
  );
};

export default NavBar;