import { useEffect, useState } from "react";
import obtenerClientes from "../../api/Cliente.api"
import productoAPI from "../../api/Producto.api"
import pedidoAPI from "../../api/Pedido.api"
import NoExiste from "../NoExiste";


const RegistraPedido = () => {

    let cantidadSeleccionada, productoSeleccionado, clienteSeleccionado;

    const [productosCarrito, setProductoCarrito] = useState([])

    const [clientes, setClientes] = useState([])

    const [productos, setProductos] = useState([])

    const [totalCompra, setTotalCompra] = useState(0)

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
    }, [])

    const limpie = () => {
        //location.reload();
        setProductoCarrito([])
        setTotalCompra(0)
        clienteSeleccionado.value = ""

    }

    const agregarProducto = () => {
        productoAPI.consultarProductoPorReferencia(productoSeleccionado.value)
            .then((producto) => {
                if (producto.cantidad < cantidadSeleccionada.value) {
                    alert("El producto no cuenta con esa cantidad disponible")
                } else {
                    validarAgregarProducto(producto, cantidadSeleccionada.value)
                }
            })
    }

    const validarAgregarProducto = (nuevoProducto, cantidadSeleccionada) => {
        let index = productosCarrito.map((e) => e.producto.referencia).indexOf(nuevoProducto.referencia);
        if (index !== -1) {
            //actualizar
            let item = productosCarrito[index];
            item.cantidadSeleccionada = item.cantidadSeleccionada + parseInt(cantidadSeleccionada)
            let carrito = eliminarProduct(item.producto.referencia, item.total)
            adicionarProductoLista(item.producto, item.cantidadSeleccionada, carrito, (totalCompra - item.total))
        } else {
            //agregar uno nuevo
            adicionarProductoLista(nuevoProducto, cantidadSeleccionada, productosCarrito, totalCompra)
        }
    }


    const adicionarProductoLista = (nuevoProducto, cantidadSeleccionada, items, total) => {
        let carrito = [...items]
        carrito.push({
            producto: nuevoProducto,
            cantidadSeleccionada: parseInt(cantidadSeleccionada),
            total: parseInt(cantidadSeleccionada) * nuevoProducto.precio
        })
        setTotalCompra(total + (parseInt(cantidadSeleccionada) * nuevoProducto.precio))
        setProductoCarrito(carrito);
    }

    const eliminarProduct = (referencia, totalItem) => {
        let index = productosCarrito.map((e) => e.producto.referencia).indexOf(referencia)
        let carrito = [...productosCarrito]
        carrito.splice(index, 1)
        setProductoCarrito(carrito)
        setTotalCompra(totalCompra - totalItem)
        return carrito
    }

    const registrarPedido = () => {
        const order = {
            cliente: clienteSeleccionado.value,
            productos: productosCarrito.map((item) => {
                return {
                    referencia: item.producto.referencia,
                    cantidad: item.cantidadSeleccionada
                }
            })
        }
        pedidoAPI.registrarPedido(order);
        limpie()
    }

    return <div>
        <h1>Nuevo Pedido</h1>
        <div className="form-group">
            <label>Cliente </label>
            <select id="cliente" className="form-select" ref={cli => clienteSeleccionado = cli}>
                <option value="" />
                {clientes.map((nombreCliente, index) => {
                    return <option key={index} value={nombreCliente}> {nombreCliente}</option>
                })}
            </select>
        </div>
        <div>
            <form onSubmit={e => {
                e.preventDefault();

            }}>
                <div className="form-group">
                    <label>Producto a vender </label>
                    <select id="producto" className="form-select" ref={prod => productoSeleccionado = prod}>
                        <option />
                        {productos.map((producto, index) => {
                            return <option key={index} value={producto.referencia}>{producto.descripcion}</option>
                        })}
                    </select>
                </div>
                <label>Cantidad</label>
                <input className="form-control" type="number" id="cantidadProducto" ref={cant => cantidadSeleccionada = cant} />
                <button className="btn btn-primary" onClick={agregarProducto} >Agregar al pedido</button>


                <table className="table">
                    <thead>
                        <tr>
                            <th>Descripcion</th>
                            <th>Cantidad</th>
                            <th>Precio Unitario</th>
                            <th>Precio Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {productosCarrito.map((item) => {
                            return <tr key={item.producto.referencia}>
                                <td>{item.producto.descripcion}</td>
                                <td>{item.cantidadSeleccionada}</td>
                                <td>{item.producto.precio}</td>
                                <td>{item.total}</td>
                                <td><button className="btn btn-primary" onClick={() => eliminarProduct(item.producto.referencia, item.total)}>Eliminar Producto</button></td>
                            </tr>
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="3" >Total</th>
                            <th>{totalCompra}</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
                <div>
                    <button className="btn btn-primary" onClick={registrarPedido}>Registar</button>
                    <button className="btn btn-secondary" onClick={limpie}>Limpiar</button>
                </div>
            </form>
        </div>
    </div>
}

export default RegistraPedido