
import { useEffect, useState } from "react";
import service from "../../api/Producto.api";

const DetalleProducto = ({ match: { params: { referencia } } }) => {

    const [producto, setProducto] = useState({})

    useEffect(() => {
        service.consultarProductoPorReferencia(referencia)
            .then((response) => {
                setProducto(response)
            })
            .catch((error)=>{
                console.log(error)
            })
    }, [])


    return <div>
        <h1>Detalle del producto {referencia} </h1>
        <img src={producto.urlFotografia} width="300px"/>
        <table className="table">
            <tr>
                <td>Referencia</td>
                <td>{producto.referencia}</td>
            </tr>
            <tr>
                <td>marca</td>
                <td>{producto.marca}</td>
            </tr>
            <tr>
                <td>materiales</td>
                <td>{producto.materiales}</td>
            </tr>
            <tr>
                <td>categoria</td>
                <td>{producto.categoria}</td>
            </tr>
            <tr>
                <td>descripcion</td>
                <td>{producto.descripcion}</td>
            </tr>
            <tr>
                <td>disponibilidad</td>
                <td>{producto.disponibilidad}</td>
            </tr>
            <tr>
                <td>precio</td>
                <td>{producto.precio}</td>
            </tr>
            <tr>
                <td>cantidad</td>
                <td>{producto.cantidad}</td>
            </tr>

        </table>

    </div>
}

export default DetalleProducto