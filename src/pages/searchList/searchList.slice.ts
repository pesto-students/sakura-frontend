import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ActionsObservable, combineEpics } from 'redux-observable';
import { map, filter, mergeMap } from 'rxjs/operators';
import { getSearchListService } from './searchList.service';

// const getProduct = {"error":null,"data":[{"id":2,"name":"Blazer","description":"","color":"#e8ab07","size":"large","status":"active","productClass":{"brandName":"Johnny Decker","rating":3,"status":"active"},"inventory":{"costPrice":"1655.00","retailPrice":"2921.00"},"productAssets":[{"isDefault":true,"publicAsset":{"fileType":"image","uri":"https://jpages-sakura.s3.ap-south-1.amazonaws.com/products/images/men-collection/austin-wade-d2s8NQ6WD24-unsplash.jpg"}}]}]}


const searchListSlice = createSlice({
    name: 'searchList',
    initialState: {
        productList: {},
    } as searchListState,
    reducers: {
        getProductList: (state, action: PayloadAction<{ subCategoryId: number }>) => { },
        receivedProductList: (state, action) => {
            state.productList = action.payload;
        }
    }
});


const getSearchResultEpic = (action$: ActionsObservable<any>) =>
    action$.pipe(
        filter(getProductList.match),
        mergeMap(action => {
            return getSearchListService(action.payload.subCategoryId).pipe(
                map(res =>
                    receivedProductList(res.data.data)
                )
            )
        })
    );

export const searchListEpic = combineEpics(getSearchResultEpic);


export const { getProductList, receivedProductList } = searchListSlice.actions;

export default searchListSlice.reducer;

type searchListState = {
    productList: any[]
}
