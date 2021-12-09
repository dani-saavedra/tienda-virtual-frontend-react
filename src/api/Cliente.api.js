

const obtenerClientes = async () => {

    const response = await fetch("http://localhost:9090/cliente/obtenerlos");
    const datos = await response.json();
    return datos;
}

export default obtenerClientes