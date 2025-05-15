import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products.js";
import ItemDetail from "../components/ItemDetail.jsx";
import "../style/ItemDetailContainer.css";

export default function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const { productoId } = useParams();

  useEffect(() => {
    getProductById(productoId).then(setProducto);
  }, [productoId]);

  return (
    <div className="item-detail-container">
      {producto ? (
        <ItemDetail producto={producto} />
      ) : (
        <div className="loader">
          <div className="loader-spinner"></div>
          <span>Cargando...</span>
        </div>
      )}
    </div>
  );
}