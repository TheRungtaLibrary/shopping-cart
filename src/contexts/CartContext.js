import React from "react";

const CartContext = React.createContext(null);
export const CartConsumer = CartContext.Consumer;

export function CartContextProvider({children}) {
    const [cartItems, setCartItems] = React.useState([]);
    let cartItemsArray = [];

    const updateCart = (product) => {
          cartItemsArray.push(product)
          setCartItems(cartItemsArray);
      };

    const productsContextValue = {
        updateCart,
        cartItems
    }

    return (
        <CartContextProvider.Provider value={productsContextValue}>
			{children}
		</CartContextProvider.Provider>
    );
}

export default CartContextProvider;