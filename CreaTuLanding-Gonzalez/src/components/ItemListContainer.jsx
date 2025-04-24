import React from 'react';
import '../css/ItemListContainer.css';

const ItemListContainer = ({message}) => {
  return (
    <div className='ItemListContainer'>
      <h2>{message}</h2>
    </div>
  );
};

export default ItemListContainer;