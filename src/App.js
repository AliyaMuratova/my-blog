import React, {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./App.css"
import ProductPage from "./pages/ProductPage/product-page";
import CreateGoodsPage from "./pages/CreateGoodsPage/create-goods-page";
import AddItemPage from "./pages/AddItemPage/add-item-page";
import {BASE_URL} from "./constants";

const App = () => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        fetch(BASE_URL + '/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }

    useEffect(getProducts, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/products" element={<ProductPage
                    products={products}
                />}
                />
                <Route path="/create-goods" element={<CreateGoodsPage
                    products={products}
                />}
                />
                <Route path="/add-item" element={<AddItemPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
