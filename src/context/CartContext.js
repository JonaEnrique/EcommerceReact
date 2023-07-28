import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    totalQuantity: 0
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
        } else {
            console.error("El producto ya fue agregado al carrito");
        }
    };

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter((prod) => prod.id !== itemId);
        setCart(cartUpdate);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some((prod) => prod.id === itemId);
    };

    const totalQuantity = cart.reduce((acc, cur) => acc + cur.quantity, 0);

    const total = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total}}>
            {children}
        </CartContext.Provider>
    );
}