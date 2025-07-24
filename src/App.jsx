import './CssGlobal.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Inicio from "./Pages/Página Inicial/PaginaInicial";
import Requerimento from "./Pages/Requerimento/Requerimento.jsx";
import Biblioteca from "./Pages/Biblioteca/Biblioteca.jsx";
import Boletim from "./Pages/Boletim/Boletim.jsx";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/inicio" element={<Inicio/>}/>
          <Route path="/boletim" element={<Boletim/>}/>
          <Route path="/requerimentos" element={<Requerimento/>}/>
          <Route path="/biblioteca" element={<Biblioteca/>}/>
        </Routes>
    </Router>
  );
}
