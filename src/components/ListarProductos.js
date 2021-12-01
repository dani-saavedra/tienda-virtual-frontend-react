import consultarProductos  from "../api/Proyecto.api";

const ListarProductos = () => {
    consultarProductos()
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
    </table>
}

export default ListarProductos;