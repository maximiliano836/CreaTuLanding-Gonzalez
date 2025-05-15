import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../data/products";
import ItemList from "../components/ItemList";
import "../style/ItemListContainer.css";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const { categoriaId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = categoriaId ? await getProductsByCategory(categoriaId) : await getProducts();
      setItems(data);
    };
    fetchData();
  }, [categoriaId]);

  useEffect(() => {
    const fetchCategorias = async () => {
      const productos = await getProducts();
      const cats = Array.from(new Set(productos.map(p => p.categoria)));
      setCategorias(cats);
    };
    fetchCategorias();
  }, []);

  const handleCategoriaChange = (e) => {
    const value = e.target.value;
    if (value) {
      navigate(`/categoria/${value}`);
    } else {
      navigate('/catalogo');
    }
  };

  return (
    <div className='item-list-container'>
      <h1>{categoriaId ? `Categoría: ${categoriaId}` : "Catálogo completo"}</h1>
      <select value={categoriaId || ""} onChange={handleCategoriaChange}>
        <option value="">Todas</option>
        {categorias.map(cat => (
          <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
        ))}
      </select>
      <ItemList productos={items} />
    </div>
  );
}