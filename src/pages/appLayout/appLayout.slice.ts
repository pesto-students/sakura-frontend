import { createSlice } from "@reduxjs/toolkit";


const appLayoutSlice = createSlice({
    name: 'appLayout',
    initialState: {
        productsInCart: [],
        productsInFavorite: [],
        isUserAuthenticated: false
    } as AppLayoutState,
    reducers: {
        addProductToCart: (state, action) => {
            const product = action.payload.product;
            state.productsInCart.push(product);
        },
        removeProductFromCart: (state, action) => {
            const productId = action.payload.productId;
            const productIndex = state.productsInCart.findIndex(productId);
            state.productsInCart.splice(productIndex, 1);
        },
        addProductToFavorite: (state, action) => {
            const product = action.payload.product;
            state.productsInFavorite.push(product);
        },
        removeProductFromFavorite: (state, action) => {
            const productId = action.payload.productId;
            const productIndex = state.productsInCart.findIndex(productId);
            state.productsInFavorite.splice(productIndex, 1);
        }
    }
});


export const {
    addProductToCart,
    removeProductFromCart,
    addProductToFavorite,
    removeProductFromFavorite
} = appLayoutSlice.actions;


export default appLayoutSlice.reducer;

type AppLayoutState = {
    productsInCart: any[],
    productsInFavorite: any[],
    isUserAuthenticated: boolean
}