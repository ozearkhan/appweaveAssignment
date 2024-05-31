import React from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from '../atom.js';
import Navbar from '../components/Navbar';
import ShoppingCartItem from '../components/ShoppingCartItem';

const ShoppingCartPage = () => {
    const [cart, setCart] = useRecoilState(cartState);

    const removeFromCart = (product) => {
        setCart(cart.filter(item => item.id !== product.id));
    };

    const updateQuantity = (product, quantity) => {
        if (quantity > product.stock) {
            alert('Cannot add more than available stock');
            return;
        }
        setCart(cart.map(item => item.id === product.id ? { ...item, quantity: Number(quantity) } : item));
    };

    const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-8 px-4">
                <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
                    {cart.map(product => (
                        <ShoppingCartItem
                            key={product.id}
                            product={product}
                            removeFromCart={removeFromCart}
                            updateQuantity={updateQuantity}
                        />
                    ))}
                    <div className="text-right mt-4">
                        <span className="text-xl font-bold">Total amount: ₹{totalAmount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCartPage;
