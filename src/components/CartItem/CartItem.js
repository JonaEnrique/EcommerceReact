import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({ id, name, price, quantity }) => {
    const { removeItem } = useContext(CartContext)

    return (
        <div>
            <h3>{name}</h3>
            <p>Cantidad: {quantity}</p>
            <p>Precio por unidad: ${price}</p>
            <button onClick={() => removeItem(id)}>Eliminar</button>
        </div>
    )
}

export default CartItem