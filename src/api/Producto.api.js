

const consultarProductos = async () => {
    const respuestaDelServidor = await fetch("http://localhost:8080/producto/all")
    return await respuestaDelServidor.json()
}

const consultarProductoPorReferencia = async (referencia) => {
    //template String
    const resputaDelservidor = await fetch(`http://localhost:8080/producto/referencia/${referencia}`)
    return await resputaDelservidor.json()
}

const crearProducto = async () => {
    return null;
}

export default {
    consultarProductos,
    consultarProductoPorReferencia
}