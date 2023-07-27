import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({ item, quantity }) => {
    const { removeItem } = useContext(CartContext)

    return (
        <div>
            <h3>{item.name}</h3>
            <p>Cantidad: {quantity}</p>
            <p>Precio por unidad: ${item.price}</p>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
        </div>
    )
}

export default CartItem