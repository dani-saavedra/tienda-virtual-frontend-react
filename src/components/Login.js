import { useHistory } from "react-router";
import autenticar from "../api/Usuario.api"

const Login = () => {
    const history = useHistory()
    let email, password;
    const autenticacion = async (e) => {
        e.preventDefault()
        let user = {
            usuario: email.value,
            clave: password.value
        }
        const { usuario } = await autenticar(user);
        if (usuario.id) {
            sessionStorage.setItem("usuario", usuario.id)
            history.push("/menu")//Vaya a tal PATH
        } else {
            alert("Usuario y/o contrasena invalida")
            sessionStorage.removeItem("usuario")
        }
    }
    //si ya hay sesino vaya el menu
    if (sessionStorage.getItem("usuario")) {
        history.push("/menu")//Vaya a tal PATH
    }
    return <div>
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input ref={value => email = value} type="email" required className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input ref={value => password = value} type="password" required className="form-control" placeholder="***" />
            </div>
            <button type="submit" onClick={autenticacion} className="btn btn-primary">Autenticar</button>
        </form>
    </div>
}
export default Login