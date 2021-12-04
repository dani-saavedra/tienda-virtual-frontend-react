import { Link } from "react-router-dom"


const FilaProducto = ({ p: { referencia, marca, cantidad, precio, disponibilidad } }) => {
    return <tr key={referencia}>
        <td>{referencia}</td>
        <td>{marca}</td>
        <td>{cantidad}</td>
        <td>{precio}</td>
        <td>{disponibilidad}</td>
        <td><Link to={`/producto/detalle/${referencia}`}>Ver detalle</Link></td>
    </tr>
}

export default FilaProducto