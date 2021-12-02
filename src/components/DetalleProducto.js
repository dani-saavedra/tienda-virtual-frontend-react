import PropTypes from 'prop-types'
import { useState } from 'react'

const DetalleProducto = ({ nombre, marca, cantidad, precio }) => {

    const [cantidadDisponible, setCantidadDisponible] = useState(cantidad)
    const [precioMostrar, setPrecioMostrar] = useState(1)

    const vender = () => {
        setCantidadDisponible(cantidadDisponible - 1)
    }

    const aplicarDescuento = () => {
        if (cantidadDisponible > 90) {
            setPrecioMostrar(precio / 2)
        } else {
            setPrecioMostrar(precio * 2)
        }
    }
    return <div>
        <h1>detallde del producto</h1>
        <ul>
            <li>{nombre}</li>
            <li>{marca}</li>
            <li>la cantidad es: {cantidadDisponible}</li>
            <li>{precioMostrar}</li>
        </ul>
        <button onClick={vender}>Vender un elemento</button>
        <button onClick={aplicarDescuento}>Aplicar Descuento</button>
    </div>
}

DetalleProducto.propTypes = {
    nombre: PropTypes.string.isRequired,
    marca: PropTypes.string.isRequired,
    cantidad: PropTypes.number,
    precio: PropTypes.number.isRequired
}

DetalleProducto.defaultProps = {
    precio: 1000
}
export default DetalleProducto