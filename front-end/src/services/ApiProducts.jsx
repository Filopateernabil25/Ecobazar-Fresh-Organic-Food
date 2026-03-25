import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext();

export default function ApiProducts({ children }) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);
    function getProducts() {
        fetch('http://localhost:5000/api/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log("Error Select Data:", err));
    }
    return (
        <ProductContext.Provider value={{ products, getProducts }}>
            {children}
        </ProductContext.Provider>
    );
}
