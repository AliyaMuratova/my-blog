import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Post from "./pages/Post/Post";
import Main from "./pages/Main/Main";
import "./App.css"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact={true} element={<Main />} />
                <Route path="/post" element={<Post />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
