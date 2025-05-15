import ItemCount from "./ItemCount";
import "../style/ItemDetail.css";

export default function ItemDetail({ producto }) {
  return (
    <div className="detalle-producto">
      <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <ItemCount stock={10} initial={1} />
    </div>
  );
}