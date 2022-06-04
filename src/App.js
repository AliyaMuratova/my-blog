import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./App.css"
import ProductPage from "./pages/ProductPage/product-page";
import CreateGoodsPage from "./pages/CreateGoodsPage/create-goods-page";
import AddItemPage from "./pages/AddItemPage/add-item-page";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/products" element={<ProductPage/>} />
                <Route path="/create-goods" element={<CreateGoodsPage/>} />
                <Route path="/add-item" element={<AddItemPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
