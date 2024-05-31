import React from 'react';
import { Button, TextInput } from 'flowbite-react';

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

const ShoppingCartItem = ({ product, removeFromCart, updateQuantity }) => {
    const handleQuantityChange = (e) => {
        updateQuantity(product, e.target.value);
    };

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between border-b py-4">
            <div className="w-16 h-16 flex items-center justify-center bg-gray-100">
                {product.image ? (
                    <img src={product.image} alt={product.name} className="object-cover rounded w-full h-full"/>
                ) : (
                    defaultImage
                )}
            </div>
            <div className="flex-1 sm:ml-4 mt-2 sm:mt-0">
                <h4 className="text-lg font-semibold">{product.name}</h4>

            </div>
            <span className="text-gray-600 px-4">QTY: </span>
            <div className="flex items-center mt-2 sm:mt-0">

                <TextInput
                    type="number"
                    min="1"
                    max={product.stock}
                    value={product.quantity}
                    onChange={handleQuantityChange}
                    className="w-16 text-center"
                />
                <Button onClick={() => removeFromCart(product)} color="black" className="ml-4">Delete</Button>
            </div>
        </div>
    );
};

export default ShoppingCartItem;
