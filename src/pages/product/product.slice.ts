import { ActionCreatorWithoutPayload, ActionCreatorWithPayload, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ActionsObservable, combineEpics } from 'redux-observable';
import { map, filter, mergeMap } from 'rxjs/operators';
import { getProductDetail, getProductOption} from './product.service';

// const getProduct = {"error":null,"data":[{"id":2,"name":"Blazer","description":"","color":"#e8ab07","size":"large","status":"active","productClass":{"brandName":"Johnny Decker","rating":3,"status":"active"},"inventory":{"costPrice":"1655.00","retailPrice":"2921.00"},"productAssets":[{"isDefault":true,"publicAsset":{"fileType":"image","uri":"https://jpages-sakura.s3.ap-south-1.amazonaws.com/products/images/men-collection/austin-wade-d2s8NQ6WD24-unsplash.jpg"}}]}]}


const productSlice = createSlice({
    name: 'product',
    initialState: {
        productDetail: {},
        productOptions: {}
    } as any,
    reducers: {
        getProductDetailReducer: (state, action) => { },
        receivedProductDetailReducer: (state, action: PayloadAction<any>) => {
            state.productDetail = action.payload || {};
        },
        getProductOptionsReducer: (state, action) => { },
        receivedProductOptionsReducer: (state, action: PayloadAction<any>) => {
            state.productOptions = action.payload || {};
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

    const getProductOptionEpic = (action$: ActionsObservable<any>) =>
    action$.pipe(
        filter(getProductOptionsReducer.match),
        mergeMap(action => {
            return getProductOption(action.payload.productId).pipe(
                map(res =>
                    receivedProductOptionsReducer(res.data.data)
                )
            )
        })
    );

export const productEpic = combineEpics(getProductDetailEpic, getProductOptionEpic);


export const {  getProductDetailReducer, 
                receivedProductDetailReducer, 
                getProductOptionsReducer, 
                receivedProductOptionsReducer } = productSlice.actions;

export default productSlice.reducer;
