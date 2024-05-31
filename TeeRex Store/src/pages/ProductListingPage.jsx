import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { productsState, cartState } from '../atom.js';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import ProductFilter from '../components/ProductFilter';
import SearchBar from '../components/SearchBar';

const ProductListingPage = () => {
    const [products, setProducts] = useRecoilState(productsState);
    const [cart, setCart] = useRecoilState(cartState);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({});

    useEffect(() => {
        fetch('/products.json')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [setProducts]);

    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            if (existingProduct.quantity >= product.stock) {
                alert('Cannot add more than available stock');
                return;
            }
            setCart(cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const filteredProducts = products.filter(product => {
        return (
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (!filters.gender || product.gender === filters.gender) &&
            (!filters.color || product.color === filters.color) &&
            (!filters.priceRange || (product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1])) &&
            (!filters.type || product.type === filters.type)
        );
    });

    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-8">
                <div className="flex justify-between items-center ">
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
                <div className="flex mt-8 space-x-8 px-2 gap-24">
                    <div className="w-full md:w-1/4">
                        <ProductFilter filters={filters} setFilters={setFilters} />
                    </div>
                    <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 auto-rows-fr">
                        {filteredProducts.map(product => (
                            <div className="h-full">
                                <ProductCard key={product.id} product={product} addToCart={addToCart} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductListingPage;
