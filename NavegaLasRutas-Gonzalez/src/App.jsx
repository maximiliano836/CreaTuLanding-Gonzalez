import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ItemListContainer from "./container/ItemListContainer";
import ItemDetailContainer from "./container/ItemDetailContainer";

function App() {
  return (
    <Router basename="/CreaTuLanding-Gonzalez">
      <>
        <NavBar />
      </>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<ItemListContainer />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/producto/:productoId" element={<ItemDetailContainer />} />
        <Route
          path="*"
          element={
            <h2
              style={{
                color: "#fff",
                background: "linear-gradient(90deg,rgb(27, 29, 67),rgb(37, 36, 34))",
                padding: "2rem",
                borderRadius: "20px",
                textAlign: "center",
                marginTop: "3rem",
                fontFamily: "Comic Sans MS, Comic Sans, cursive",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                maxWidth: "500px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              🚧 404 - Página no encontrada 🚀
            </h2>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
