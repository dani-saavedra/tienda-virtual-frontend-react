import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DetalleProducto from './components/DetalleProducto';
import DetalleProductoNew from './components/DetalleProductoNew';
import ListarProductos from './components/ListarProductos';
import PintarDatos from './components/PintarDatos';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={ListarProductos}/>
      <Route exact path='/detalle/:id' component={DetalleProductoNew}/>
    </Switch>
    
  </BrowserRouter>,
  document.getElementById('root')
);