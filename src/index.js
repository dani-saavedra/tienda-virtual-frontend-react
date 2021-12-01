import React from 'react';
import ReactDOM from 'react-dom';
import PintarDatos from './components/PintarDatos';




//Functional Componentes
/*
  Un pedazo de logica, que puede tener variable, metodos
  una parte visual (html) puede tener css
  y se usa para presentar algo en la pantalla y puede 
  ser reutilizable
  JSX javascript + html 
*/

//Pinte en el dom en la parte de 'otroRoot' el siguiente functional component 'PintarHolaMundo'
ReactDOM.render(
  <PintarDatos />,
  document.getElementById('root')
);