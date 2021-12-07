import { Link } from "react-router-dom"

const MenuPrincipal = () => {

    return <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" ><Link to="/">Inicio</Link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><Link to="/producto">Productos</Link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" ><Link to="/cliente">Clientes</Link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" ><Link to="/pedido">Pedidos</Link></a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

}

export default MenuPrincipal