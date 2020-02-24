import React from "react";

const ShoppingContext = React.createContext(null);
export const ShoppingConsumer = ShoppingContext.Consumer;

export function ShoppingProvider({children}) {
    const [products, setProducts] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);

    /**
     * Updates cart with new item
     * @param product 
     */
    const updateCart = (product) => {
          setCartItems([...cartItems, product]);
      };
    
    /**
     * loads product data from server
     */
    const getProducts = async () => {
          const response = await fetch('https://private-3efa8-products123.apiary-mock.com/products');
          const jsonData = await response.json();
          setProducts(jsonData.products);
      };

    const productsContextValue = {
        getProducts,
        products,
        cartItems,
        updateCart
    }

    return (
        <ShoppingContext.Provider value={productsContextValue}>
			{children}
		</ShoppingContext.Provider>
    );
}

export default ShoppingContext;