import { useEffect, useState } from "react";
import obtenerClientes from "../../api/Cliente.api"
import productoAPI from "../../api/Producto.api"


const RegistraPedido = () => {

    let cantidadSeleccionada, productoSeleccionado;

    const [productosCarrito, setProductoCarrito] = useState([])

    const [clientes, setClientes] = useState([])

    const [productos, setProductos] = useState([])

    useEffect(() => {
        obtenerClientes()
            .then((response) => {
                setClientes(response.clientes)
            })
            .catch((error) => {
                console.log(error)
            })
        productoAPI.consultarProductos()
            .then((response) => {
                setProductos(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [productosCarrito])

    const agregarProducto = () => {
        productoAPI.consultarProductoPorReferencia(productoSeleccionado.value)
            .then((producto) => {
                if (producto.cantidad < cantidadSeleccionada.value) {
                    alert("El producto no cuenta con esa cantidad disponible")
                } else {
                    let carrito = productosCarrito
                    console.log(carrito)
                    carrito.push({
                        producto,
                        cantidadSeleccionada: parseInt(cantidadSeleccionada.value),
                        total: parseInt(cantidadSeleccionada.value) * producto.precio
                    })
                    setProductoCarrito(carrito);
                }
            })




    }
    console.log("voy a pintar")
    console.log(productosCarrito)
    return <div>
        <h1>Nuevo Pedido</h1>
        <label>Cliente </label>
        <select id="cliente" className="form-select">
            <option />
            {clientes.map((nombreCliente, index) => {
                return <option key={index} value={nombreCliente}> {nombreCliente}</option>
            })}
        </select>
        <div>
            <form onSubmit={e => {
                e.preventDefault();

            }}>
                <label>Producto a vender </label>
                <select id="producto" ref={prod => productoSeleccionado = prod}>
                    <option />
                    {productos.map((producto, index) => {
                        return <option key={index} value={producto.referencia}>{producto.descripcion}</option>
                    })}
                </select>
                <label>Cantidad</label>
                <input type="number" id="cantidadProducto" ref={cant => cantidadSeleccionada = cant} />
                <button onClick={agregarProducto} >Agregar al pedido</button>


                <table className="table">
                    <thead>
                        <tr>
                            <th>Descripcion</th>
                            <th>Cantidad</th>
                            <th>Precio Unitario</th>
                            <th>Precio Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productosCarrito.map((item) => {
                            return <tr key={item.producto.referencia}>
                                <td>{item.producto.descripcion}</td>
                                <td>{item.cantidadSeleccionada}</td>
                                <td>{item.producto.precio}</td>
                                <td>{item.total}</td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </form>
        </div>
    </div>
}

export default RegistraPedido