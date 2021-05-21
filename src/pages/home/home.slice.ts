import { ActionCreatorWithoutPayload, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ActionsObservable, combineEpics } from 'redux-observable';
import { map, filter, mergeMap } from 'rxjs/operators';
import { getExclusivePromoEvents } from './home.service';



const homeSlice = createSlice({
    name: 'home',
    initialState: {
        exclusiveEvents: [],
        productHotDeals: []
    } as any,
    reducers: {
        getExclusivePromo: (state, action) => { },
        receivedExclusivePromo: (state, action: PayloadAction<any>) => {
            state.exclusiveEvents = action.payload || [];
        },
        getProductHotDeals: (state, action) => { },
        receivedProductHotDeals: (state, action) => { },
    }
});


const getEclusivePromoEpic = (action$: ActionsObservable<ActionCreatorWithoutPayload<any>>) =>
    action$.pipe(
        filter(getExclusivePromo.match),
        mergeMap(action => {
            return getExclusivePromoEvents().pipe(
                map(res =>
                    receivedExclusivePromo(res.data.data)
                )
            )
        })
    );



// const getCollectionDealsEpic = (action$: ReduxActionObservable<GetCollectionDealsPayload>) => action$.pipe(
//     filter(getCategoryDeals.match),
//     mergeMap(action => {
//         const collectionType = action.payload.collectionType;
//         switch (collectionType) {
//             case CollectionType.Men:
//                 return
//         }
//     }))

export const homeEpic = combineEpics(getEclusivePromoEpic);


export const { getExclusivePromo, receivedExclusivePromo, getProductHotDeals, receivedProductHotDeals } = homeSlice.actions;
export default homeSlice.reducer;
