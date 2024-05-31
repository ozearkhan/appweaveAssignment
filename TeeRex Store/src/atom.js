import { atom } from 'recoil';

export const cartState = atom({
    key: 'cartState',
    default: [],
});

export const productsState = atom({
    key: 'productsState',
    default: [],
});
