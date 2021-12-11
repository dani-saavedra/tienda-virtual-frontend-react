

const obtenerPedidos = async () => {

    const response = await fetch("http://localhost:9090/api/order/all");
    const datos = await response.json();
    return datos;
}

const registrarPedido = (order) => {
    fetch("http://localhost:9090/api/order/new", {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(res => alert("Pedido Registrado"))
        .catch(error => console.log(error))
}

export default {
    obtenerPedidos,
    registrarPedido
}