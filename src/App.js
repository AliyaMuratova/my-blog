import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./App.css"
import ProductPage from "./pages/ProductPage/product-page";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/products" element={<ProductPage/>} />
                <Route path="/create-goods" element={<ProductPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
