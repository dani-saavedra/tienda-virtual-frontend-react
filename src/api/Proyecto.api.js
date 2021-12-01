

const consultarProductos = async () => {
    const respuestaDelServidor = await fetch("http://localhost:9090/producto/all")
    return respuestaDelServidor.json()
}

const crearProducto = async () => {
    return null;
}

export default consultarProductos