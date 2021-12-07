import { Link } from "react-router-dom";


const MenuProducto = () => {
    return <div>
        <ul class="nav flex-column">
            <li class="nav-item">
                <a class="nav-link"><Link to="/producto/registrar">Registrar Producto</Link></a>
            </li>
            <li class="nav-item">
                <a class="nav-link"><Link to="/producto/listar">Listar Productos</Link></a>
            </li>
        </ul>
    </div>
}

export default MenuProducto;