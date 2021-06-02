import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActionsObservable, combineEpics } from "redux-observable";
import { filter, map, mergeMap } from "rxjs/operators";
import { getSearchBarResults } from "./header.service";

enum DrawerState {
    open = "open",
    closed = "closed"
}

const headerSlice = createSlice({
    name: 'header',
    initialState: {
        drawerState: DrawerState.closed,
        searchResults: [],
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

        },
        getSearchQuery: (state, action: PayloadAction<searchQueryPayload>) => { },
        receivedSearchQuery: (state, action) => {
            state.searchResults = action.payload;
        }
    }
});


const getSearchResultsEpic = (action$: ActionsObservable<any>) =>
    action$.pipe(
        filter(getSearchQuery.match),
        mergeMap(action => {
            return getSearchBarResults(action.payload.matchString).pipe(
                map(res =>
                    receivedSearchQuery(res.data.data)
                )
            )
        })
    );



export const headerEpic = combineEpics(getSearchResultsEpic);

export const { openDrawer, closeDrawer, getSearchQuery, receivedSearchQuery } = headerSlice.actions;
export default headerSlice.reducer;

export type searchQueryPayload = {
    matchString: string;
}

type CartHeaderState = {
    cartCount: number;
}

type FavoriteHeaderState = {
    favoriteCount: number;
}

type SearchResult = {
    id: string,
    name: string,
    subCategories: { id: number, name: string }[]
}

type HeaderState = {
    drawerState: DrawerState,
    cartHeaderState: CartHeaderState,
    favoriteHeaderState: FavoriteHeaderState,
    searchResults: SearchResult[]
}