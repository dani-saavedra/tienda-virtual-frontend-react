import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import DetallePedido from "./DetallePedido"



const Pedido = ({ pedido }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Detalle Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
            </Modal.Body>
        </Modal>
        <tr>
            <td>{pedido.status}</td>
            <td>{pedido.numberOrder}</td>
            <td>{pedido.cliente}</td>
            <td>{pedido.registerDay}</td>
            <td>$ {pedido.total}</td>
            <td><button onClick={handleShow}>Ver</button></td>
        </tr>
    </>
}
export default Pedido