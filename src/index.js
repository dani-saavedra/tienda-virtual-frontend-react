import React from 'react';
import ReactDOM from 'react-dom';
import ListarProductos from './components/products/ListarProductos';
import PintarDatos from './components/PintarDatos';
import NoExiste from './components/NoExiste';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import DetalleProducto from './components/products/DetalleProducto';




//Trabajo con SPA ( single page application) tengo un solo html pero multiples vistas(componentes)
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/producto/registrar" component={ListarProductos}></Route>
      <Route exact path="/producto/listar" component={ListarProductos}></Route>
      <Route exact path="/producto/detalle/:referencia" component={DetalleProducto}></Route>
      <Route path="/" component={NoExiste}></Route>
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);