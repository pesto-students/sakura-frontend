import { createSlice } from "@reduxjs/toolkit";

enum DrawerState {
    open = "open",
    closed = "closed"
}

const headerSlice = createSlice({
    name: 'header',
    initialState: {
        drawerState: DrawerState.closed,
        cartHeaderState: {
            cartCount: 0
        },
        favoriteHeaderState: {
            favoriteCount: 0
        }
    } as HeaderState,
    reducers: {
        openDrawer: (state) => {
            state.drawerState = DrawerState.open;
        },
        closeDrawer: (state, action) => {
            state.drawerState = DrawerState.closed;
        },
        updateCartCount: (state, action) => {
            
        }
    }
});

type CartHeaderState = {
    cartCount: number;
}

type FavoriteHeaderState = {
    favoriteCount: number;
}

type HeaderState = {
    drawerState: DrawerState,
    cartHeaderState: CartHeaderState,
    favoriteHeaderState: FavoriteHeaderState
}

export const { openDrawer, closeDrawer } = headerSlice.actions;
export default headerSlice.reducer;