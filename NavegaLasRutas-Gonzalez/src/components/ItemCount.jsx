import { useState } from "react";
import "../style/ItemCount.css";

export default function ItemCount({ stock, initial }) {
  const [count, setCount] = useState(initial);

  const increment = () => count < stock && setCount(count + 1);
  const decrement = () => count > 1 && setCount(count - 1);

  return (
    <div className="item-count-container">
      <button className="item-count-btn" onClick={decrement}>-</button>
      <span className="item-count-value">{count}</span>
      <button className="item-count-btn" onClick={increment}>+</button>
      <button
        className="item-count-add-btn"
        onClick={() => alert(`Agregado ${count} al carrito`)}
      >
        Agregar al carrito
      </button>
    </div>
  );
}