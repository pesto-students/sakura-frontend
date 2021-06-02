import { ActionCreatorWithoutPayload, ActionCreatorWithPayload, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ActionsObservable, combineEpics } from 'redux-observable';
import { map, filter, mergeMap } from 'rxjs/operators';
import { getProductDetail } from './product.service';

// const getProduct = {"error":null,"data":[{"id":2,"name":"Blazer","description":"","color":"#e8ab07","size":"large","status":"active","productClass":{"brandName":"Johnny Decker","rating":3,"status":"active"},"inventory":{"costPrice":"1655.00","retailPrice":"2921.00"},"productAssets":[{"isDefault":true,"publicAsset":{"fileType":"image","uri":"https://jpages-sakura.s3.ap-south-1.amazonaws.com/products/images/men-collection/austin-wade-d2s8NQ6WD24-unsplash.jpg"}}]}]}


const productSlice = createSlice({
    name: 'product',
    initialState: {
        productDetail: {}
    } as any,
    reducers: {
        getProductDetailReducer: (state, action) => { },
        receivedProductDetailReducer: (state, action: PayloadAction<any>) => {
            state.productDetail = action.payload || {};
        }
    }
});


const getProductDetailEpic = (action$: ActionsObservable<any>) =>
    action$.pipe(
        filter(getProductDetailReducer.match),
        mergeMap(action => {
            return getProductDetail(action.payload.productId).pipe(
                map(res =>
                    receivedProductDetailReducer(res.data.data)
                )
            )
        })
    );



export const productEpic = combineEpics(getProductDetailEpic);


export const { getProductDetailReducer, receivedProductDetailReducer } = productSlice.actions;
export default productSlice.reducer;
