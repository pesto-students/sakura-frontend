import { ActionCreatorWithoutPayload, ActionCreatorWithPayload, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ActionsObservable, combineEpics } from 'redux-observable';
import { map, filter, mergeMap } from 'rxjs/operators';


// load favorite initial values 

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favoriteItems: []
    } as any,
    reducers: {
        addItemToFavorite: (state, action: PayloadAction<any>) => {
           let  favoriteItems: any =  localStorage.getItem("favoriteItems")
           if(favoriteItems){
                favoriteItems = JSON.parse(favoriteItems);

           }else{
                favoriteItems  = [] 
           }
           if(!favoriteItems.find((item: any)=>item.productId === action.payload.productId)){
            favoriteItems.push(action.payload)
            localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
            state.favoriteItems = favoriteItems
           }
           
        },

        removeItemToFavorite: (state, action: PayloadAction<any>) => {
            let  favoriteItems: any =  localStorage.getItem("favoriteItems")
            if(favoriteItems){
                 favoriteItems = JSON.parse(favoriteItems);
 
            }else{
                 favoriteItems  = [] 
            }
            let newFavoriteItems = favoriteItems.filter((item: any)=> item.productId !== action.payload.productId)
            localStorage.setItem("favoriteItems", JSON.stringify(newFavoriteItems));

            state.favoriteItems = newFavoriteItems
        },

        updateItemToFavorite: (state, action: PayloadAction<any>) => {
            let  favoriteItems: any =  localStorage.getItem("favoriteItems")
            if(favoriteItems){
                 favoriteItems = JSON.parse(favoriteItems);
 
            }else{
                 favoriteItems  = [] 
            }
            favoriteItems = favoriteItems.map((item: any)=> {
                if(item.productId !== action.payload.productId)
                {
                    return item
                }else{
                    return action.payload
                }
            })
            localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
            state.favoriteItems = favoriteItems
        },

        getItemFromFavorite: (state, action: PayloadAction<any>) => {
            let  favoriteItems: any =  localStorage.getItem("favoriteItems")
            if(favoriteItems){
                 favoriteItems = JSON.parse(favoriteItems);
 
            }else{
                 favoriteItems  = [] 
            }
            state.favoriteItems = favoriteItems
        },
    }
});



export const { addItemToFavorite, removeItemToFavorite, updateItemToFavorite, getItemFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
