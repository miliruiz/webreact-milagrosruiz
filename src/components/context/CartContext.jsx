import React, { useState, useContext } from "react";
import { products } from "../../data";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children}) => {

    const [cart, setCart] = useState([]);

    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(products => {
                return products.id === item.id ? { ...products, quantity: products.quantity + quantity } : products
            }));
        } else {
            setCart([...cart, { ...item, quantity }]);
        }};

        console.log(cart);


        const totalPrice = () => {
            return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0)
        }

        const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)

        const clearCart = () => setCart([]);

        const isInCart = (id) => cart.find(products => products.id === id) ? true : false;

        const removeProduct = (id) => setCart(cart.filter(products => products.id !== id));
    

        return (
            <CartContext.Provider value={{
                clearCart,
                isInCart,
                removeProduct,
                addProduct,
                totalPrice,
                totalProducts,
                cart
            }}>
                {children}
            </CartContext.Provider>
        );
    }

    export default CartProvider;