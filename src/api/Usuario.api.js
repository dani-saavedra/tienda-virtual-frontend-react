
const autenticar = async (usuario) => {
    const resp = await fetch("http://localhost:8080/login", {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-type': 'application/json'
        }
    })
    return await resp.json()
}

export default autenticar