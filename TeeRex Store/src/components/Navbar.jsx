import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { cartState } from '../atom.js';
import { Navbar as FlowbiteNavbar, Badge } from 'flowbite-react';

const Navbar = () => {
    const [cart] = useRecoilState(cartState);
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <FlowbiteNavbar fluid rounded className="bg-white shadow-md p-4 md:px-16">
            <div className="flex items-center justify-between w-full">
                <Link to="/" className="text-2xl font-semibold">TeeRex Store</Link>
                <div className="flex items-center space-x-4">
                    <Link to="/" className="text-lg font-medium">Products</Link>
                    <Link to="/cart" className="relative flex items-center">
                        <svg className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
                        </svg>
                        <Badge color="info" className="absolute top-[-5px] right-[-10px]">{totalItems}</Badge>
                    </Link>
                </div>
            </div>
        </FlowbiteNavbar>
    );
};

export default Navbar;
