import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,} from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import { Provider } from 'react-redux'
import generateStore from "./store";
import Inicio from "./component/Inicio";
import Recetaid from "./component/Recetaid";
import Comidaid from './component/Comidaid'
import Notfound from "./component/Notfound";


function App() {
  const store = generateStore()

  return (
    <BrowserRouter>
        <Provider store={store}>

        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/Buscar" element={<Home />} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Receta/:id" element={<Recetaid />} />
          <Route path="/Receta2/:id" element={<Comidaid/>} />
          <Route path="*" element={<Notfound/>} />
          



          
        </Routes>
        </Provider>
    </BrowserRouter>
  );
}

export default App;
