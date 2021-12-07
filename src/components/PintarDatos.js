import DetalleProducto from "./products/DetalleProducto";
import PintarHolaMundo from "./PintarHolaMundo";

//JAVA lenguaje fuertemente tipado
//Javascript lenguaje debilmente tipado &  tipado dinamico
const producto = {
  referencia: "10-A",
  nombre: "escobas",
  valor: 10000,
  cantidad: 99,
  marca:"Cualquier cosa"
}

const { referencia } = producto;
const referencia2 = producto.referencia;

const PintarDatos = () => {
  return (
    <>{}
      <PintarHolaMundo nombreProducto={producto.nombre} otroParametro="Cualquiercosa" parametroQueEsUnNumero={2} />
      <DetalleProducto nombre={producto.nombre} marca={producto.marca} cantidad={producto.cantidad}/>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre {referencia} </th>
            <th>Apellido {referencia2} </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Daniel</td>
            <td>Saavedra</td>
          </tr>
          <tr>
            <td>Jonatan</td>
            <td>Martinez</td>
          </tr>
        </tbody>
      </table>
    </>
  )
};

export default PintarDatos;