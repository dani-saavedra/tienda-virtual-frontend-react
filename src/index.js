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
import MenuPrincipal from './components/MenuPrincipal';
import DetalleProducto from './components/products/DetalleProducto';
import InicioProducto from './components/products/InicioProducto';
import RegistraPedido from './components/pedido/RegistrarPedido';

import './general.css'
import VerPedidos from './components/pedido/VerPedidos';



//Trabajo con SPA ( single page application) tengo un solo html pero multiples vistas(componentes)
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MenuPrincipal}></Route>
      <Route exact path="/producto" component={InicioProducto}></Route>
      <Route exact path="/pedido" component={RegistraPedido}></Route>
      <Route exact path="/pedidos" component={VerPedidos}></Route>
      <Route exact path="/producto/registrar" component={ListarProductos}></Route>
      <Route exact path="/producto/listar" component={ListarProductos}></Route>
      <Route exact path="/producto/detalle/:referencia" component={DetalleProducto}></Route>
      <Route path="/" component={NoExiste}></Route>
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);