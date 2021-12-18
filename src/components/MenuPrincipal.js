import { useHistory } from "react-router";
import { Link } from "react-router-dom"

const MenuPrincipal = () => {
    const history = useHistory()
    const cerrarSesion = () => {
        sessionStorage.removeItem("usuario")
        history.push("/")
    }
    if(!sessionStorage.getItem("usuario")){
        history.push("/")
    }
    return <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" ><Link to="/">Inicio</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"><Link to="/producto">Productos</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" ><Link to="/cliente">Clientes</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" ><Link to="/pedido">Nuevo Pedido</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" ><Link to="/pedidos">Ver Pedidos</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" ><button onClick={()=>cerrarSesion()} >Cerrar Sesion</button></a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

}

export default MenuPrincipal