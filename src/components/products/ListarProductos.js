import service from "../../api/Proyecto.api";

import { useState, useEffect } from 'react'
import FilaProducto from "./FilaProducto";


//resolve cuando responde ok
//error  se desmadra todo
const ListarProductos = () => {
    //NO USAR ESTO JAMAS
    /*const datos = consultarProductos()
        .then((response) => {
            console.log(response)
            let filas = ""
            for (let i = 0; i < response.length; i++) {
                filas = filas + `<tr>
                                <td>${response[i].referencia}</td>
                                <td>${response[i].marca}</td>
                                <td>${response[i].cantidad}</td>
                                <td>${response[i].precio}</td>
                                <td>${response[i].disponibilidad}</td>
                            </tr>`
            }
            document.getElementById("bodyTabla").innerHTML = filas
        })
        .catch((error) => {
            console.log("Mori")
        })*/
    //hooks
    const [productos, setProductos] = useState([])

    //Nota: un mal use de useState para setear una variable te puede generar un side effect.

    //hooks

    //llamando con boton, (para gustos los colores)
    const cargarProductos = () => {
        service.consultarProductos()
            .then((response) => setProductos(response))
            .catch((error) => {
                console.log("Mori")
            })
    }
    /*
    Voy a ejecutar algo (callback) al momento que pase el tiempo que tenga definido
    setTimeout(() => {
        service.consultarProductos()
            .then((response) => setProductos(response))
            .catch((error) => {
                console.log("Mori")
            })
    }, 2000) // 2 segundos
    */

    useEffect(() => {
        service.consultarProductos()
            .then((response) => setProductos(response))
            .catch((error) => {
                console.log("Mori")
            })
    }, [])
    //}, [EL ELEMENTO QUE ESTE ACA Y CAMBIE DISPARA EL USEEFFECT])



    //map: Iterar, transforma en algo
    return <div>
        <button className="btn btn-primary" onClick={cargarProductos}>Cargue los elementos </button>
        <table className="table">
        <thead>
            <tr>
                <th>Referencia</th>
                <th>Marca</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Disponibilidad</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody id="bodyTabla">
            {productos.map((producto) => <FilaProducto p={producto} />)}
        </tbody>
    </table>

        
    </div>
}

export default ListarProductos;