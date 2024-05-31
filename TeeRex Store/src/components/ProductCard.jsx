import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from '../atom.js';
import { Button } from 'flowbite-react';

const defaultImage = (
    <svg
        className="w-full h-full text-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-10 10-10S17.52 2 12 2zm-1 14h2v2h-2v-2zm1-12C8.69 4 4 8.69 4 12c0 .83.17 1.62.46 2.35L12 12l7.54 2.35c.29-.73.46-1.52.46-2.35 0-3.31-4.69-8-8-8z"
        />
    </svg>
);

const ProductCard = ({ product }) => {
    const [cart, setCart] = useRecoilState(cartState);
    const [quantity, setQuantity] = useState(1);
    const [isInCart, setIsInCart] = useState(false);

    const addToCart = () => {
        setCart([...cart, { ...product, quantity }]);
        setIsInCart(true);
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
        const updatedCart = cart.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            const updatedCart = cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
            );
            setCart(updatedCart);
        } else {
            setQuantity(0);
            setIsInCart(false);
            setCart(cart.filter(item => item.id !== product.id));
        }
    };

    return (
        <div className="border rounded-lg overflow-hidden shadow-lg flex flex-col justify-between px-4 pt-4">
            <div className="relative w-full h-52 bg-gray-100 flex items-center justify-center">
                {product.image ? (
                    <img className="w-full h-full object-cover" src={product.image} alt="" />
                ) : (
                    defaultImage
                )}
                <div className="absolute top-2 left-2 bg-transparent bg-opacity-75 px-2 py-1 rounded">
                    <div className="font-bold text-sm">{product.name}</div>
                </div>
            </div>
            <div className="px-4 py-2 flex items-center justify-between">
                <p className="text-gray-700 text-base font-bold">₹{product.price}</p>
                {isInCart ? (
                    <div className="flex items-center">
                        <button
                            onClick={handleDecrement}
                            className="text-gray-800 font-bold py-1 px-3"
                        >
                            -
                        </button>
                        <span className="font-bold px-3">{quantity}</span>
                        <button
                            onClick={handleIncrement}
                            className="text-gray-800 font-bold py-1 px-3"
                        >
                            +
                        </button>
                    </div>
                ) : (
                    <Button
                        onClick={addToCart}
                        color="blue"
                        className="hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                    >
                        Add to Cart
                    </Button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
