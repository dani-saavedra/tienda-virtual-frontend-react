import { Link } from "react-router-dom"



const Home = () => {

    return <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" ><Link to="/">Inicio</Link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><Link to="/producto/registrar">Registrar Producto</Link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" ><Link to="/producto/listar">Ver Productos</Link></a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

}

export default Home