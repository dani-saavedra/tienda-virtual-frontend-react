import { Link } from "react-router-dom"


const RowData = ({ producto: { referencia, marca, cantidad, precio, disponibilidad } }) => {
    
    return <tr>
        <td>{referencia}</td>
        <td>{marca}</td>
        <td>{cantidad}</td>
        <td>{precio}</td>
        <td>{disponibilidad}</td>
        <Link to={`/detalle/id=${referencia}`} >Detalle</Link>
    </tr>
}

export default RowData