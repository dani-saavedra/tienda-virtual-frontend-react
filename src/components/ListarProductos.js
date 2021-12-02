import consultarProductos from "../api/Proyecto.api";

import { useState } from 'react'


//resolve cuando responde ok
//error  se desmadra todo
const ListarProductos = () => {
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
    const [productos, setProductos] = useState("")


    const pintarProductos = () => {
        consultarProductos()
            .then((response) => {
                return response.map(({ referencia, marca, cantidad, precio, disponibilidad }) => {
                    return <tr>
                        <td>{referencia}</td>
                        <td>{marca}</td>
                        <td>{cantidad}</td>
                        <td>{precio}</td>
                        <td>{disponibilidad}</td>
                    </tr>
                });
            })
            .catch((error) => {
                console.log("Mori")
            })
    }


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
            {pintarProductos()}
        </tbody>
    </table>
}

export default ListarProductos;