import Item from "./Item";
import "../style/ItemList.css";

export default function ItemList({ productos }) {
  return (
    <div className="lista-productos">
      {productos.map((prod) => (
        <Item key={prod.id} producto={prod} />
      ))}
    </div>
  );
}