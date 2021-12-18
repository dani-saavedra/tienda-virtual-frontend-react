
import { useEffect, useState } from "react"
import pedidoAPI from "../../api/Pedido.api"
import Pedido from './FilaPedido'


const VerPedidos = () => {
    let estado;
    const [pedidos, setPedidos] = useState([])
    useEffect(() => {
        const user = sessionStorage.getItem("usuario")
        pedidoAPI.obtenerPedidosPorVendedor(user)
            .then(resp => {
                setPedidos(resp)
            })
    }, [])


    const filtrarPorEstado = () => {
        const user = sessionStorage.getItem("usuario")
        if (estado.value != "") {
            pedidoAPI.obtenerPedidosPorVendedorYEstado(user, estado.value)
                .then(resp => {
                    setPedidos(resp)
                })
        } else {
            pedidoAPI.obtenerPedidosPorVendedor(user)
                .then(resp => {
                    setPedidos(resp)
                })
        }

    }
    return <div>
        <h1>Pedidos Registrados</h1>
        <h4>Filtros</h4>
        Estado
        <select ref={value => estado = value} className="form-select" onChange={filtrarPorEstado}>
            <option value=""></option>
            <option value="APROBADA">Aprobadas</option>
            <option value="RECHAZADA">Rechazadas</option>
            <option value="PENDIENTE">Pendientes</option>
        </select>
        <table className="table">
            <thead>
                <tr>
                    <th>Estado</th>
                    <th>Numero</th>
                    <th>Cliente</th>
                    <th>Fecha</th>
                    <th>Total</th>
                    <th>Ver detalle</th>
                </tr>
            </thead>
            <tbody>
                {pedidos.map((pedido) => <Pedido pedido={pedido} />)}
            </tbody>
        </table>
    </div>
}

export default VerPedidos;