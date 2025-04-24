import React from 'react';
import CartWidget from './CartWidget';
import '../css/NavBar.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className='NavBar'>
      <Link to="/"><h1>TecnoStore</h1></Link>
      <a href="#">Inicio</a>
      <a href="#">Productos</a>
      <a href="#">Contacto</a>
      <a href="#"><CartWidget /></a>
    </nav>
  );
};

export default NavBar;