import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    console.log(cart);

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, { item, quantity }]);
        } else {
            console.error("El producto ya fue agregado al carrito");
        }
    };

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter((prod) => prod.item.id !== itemId);
        setCart(cartUpdate);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some((prod) => prod.item.id === itemId);
    };

    const totalQuantity = cart.reduce((acc, cur) => acc + cur.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity}}>
            {children}
        </CartContext.Provider>
    );
}