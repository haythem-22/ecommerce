import React, {createContext, useContext, useState, useEffect, Children } from "react";

const CartContext = createContext()

export const useCart = () =>{
    const context = useContext(CartContext);
    if(!context) {
        console.error("context undefined error")
        return{
            cartItem:[],
            cartCount:0,
            cartTotal:0,
            isCartOpen:false,
            addToCart: () => console.log("cart provider missing "),
            removeFromCart: () => {},
            updateQuantity: () => {},
            clearCart: () => {},
            toggleCart: () => {},
            openCart: () => {},
            closeCart: () => {}
        }
    }
    return context
}

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)
    const [isCartOpen, setIsCartOpen] = useState(false)


    useEffect(() => {
        const savedCart = localStorage.getItem('cart')
        if ( savedCart ) {
            try {
                const parsedCart = JSON.parse(savedCart)
                setCartItems(parsedCart)
                setCartCount(parsedCart.reduce((sum, item) => sum + item.quantity, 0))
                setCartTotal(parsedCart.reduce((sum, item) => sum + (item.price * item.quantity), 0))
            } catch(e){
                console.error('Failed to load cart')
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
        setCartCount(cartItems.reduce((sum, item) => sum + item.quantity, 0))
        setCartTotal(cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0))
    }, [cartItems])

    const addToCart = (product) =>{
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id)

            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id 
                    ? {...item, quantity: item.quantity + 1}
                    : item
                )
            } else {
                return[...prevItems, {... product, quantity: 1}]
            }
        })
        setIsCartOpen(true)

        setTimeout(() => {
            setIsCartOpen(false)
        }, 3000)
    }

    const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    }
    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(productId)
            return
        }

        setCartItems(prevItems => prevItems.map(
            item => item.id === productId ? {...item, quantity:newQuantity}: item
        ))
    }

    const clearCart = () => {
        setCartItems([])
    }

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
    }

    const openCart = () => {
        setIsCartOpen(true)
    }

    const closeCart = () => {
        setIsCartOpen(false)
    }

    return (
        <CartContext.Provider value={{
            cartItems, 
            cartCount,
            cartTotal,
            isCartOpen,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            toggleCart,
            openCart,
            closeCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

