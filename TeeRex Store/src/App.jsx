import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ProductListingPage from './pages/ProductListingPage';
import ShoppingCartPage from './pages/ShoppingCartPage';

const App = () => {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProductListingPage />} />
                    <Route path="/cart" element={<ShoppingCartPage />} />
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
};

export default App;
