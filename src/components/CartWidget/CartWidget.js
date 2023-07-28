import cart from './assets/carrito-de-compras.svg';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

import './CartWidget.css';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to="/cart" className="CartWidget" style={{ display: totalQuantity > 0 ? "block" : "none"}}>
            <img className="CartImg" src={cart} alt="Carrito de compras" />
            { totalQuantity }
        </Link>
    )
}

export default CartWidget;