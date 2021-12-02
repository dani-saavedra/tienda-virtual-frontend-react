import consultarProductos from "../api/Proyecto.api";

import { useState, useEffect } from 'react'
import RowData from "./RowData";


const ListarProductos = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        consultarProductos()
            .then((response) => setProductos(response))
            .catch((error) => {
                console.log("Mori")
            })

    }, [])

    return <table className="table">
        <thead>
            <tr>
                <th>Referencia</th>
                <th>Marca</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Disponibilidad</th>
            </tr>
        </thead>
        <tbody id="bodyTabla">
            {productos.map((producto) => <RowData producto={producto} />)}
        </tbody>
    </table>

}

export default ListarProductos;