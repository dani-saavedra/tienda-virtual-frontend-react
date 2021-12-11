
import pedidoAPI from "../../api/Pedido.api"


const VerPedidos = () => {

    const [pedidos, setPedidos] = useState([])
    useEffect(() => {
        pedidoAPI.obtenerPedidos()
            .then(resp => {
                setPedidos(resp)
            })
    }, [])

    return <div>
        <h1>Pedidos Registrados</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Estado</th>
                    <th>Numero</th>
                    <th>Cliente</th>
                    <th>Fecha</th>
                    <th>Total</th>
                    <th>Detalle</th>
                    <th>Aprobar</th>
                </tr>
            </thead>
            <tbody>
                {pedidos.map((pedido)=>{
                    return <tr>
                        <td>{pedido}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}

export default VerPedidos;