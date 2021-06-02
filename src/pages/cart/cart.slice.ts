import { ActionCreatorWithoutPayload, ActionCreatorWithPayload, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ActionsObservable, combineEpics } from 'redux-observable';
import { map, filter, mergeMap } from 'rxjs/operators';


// load cart initial values 

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    } as any,
    reducers: {
        addItemToCart: (state, action: PayloadAction<any>) => {
           let  cartItems: any =  localStorage.getItem("cartItems")
           if(cartItems){
                cartItems = JSON.parse(cartItems);

           }else{
                cartItems  = [] 
           }
           if(!cartItems.find((item: any)=>item.productId === action.payload.productId)){
            cartItems.push(action.payload)
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            state.cartItems = cartItems
           }
           
        },

        removeItemToCart: (state, action: PayloadAction<any>) => {
            let  cartItems: any =  localStorage.getItem("cartItems")
            if(cartItems){
                 cartItems = JSON.parse(cartItems);
 
            }else{
                 cartItems  = [] 
            }
            cartItems = cartItems.filter((item: any)=> item.productId !== action.payload.productId)
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            state.cartItems = cartItems
        },

        updateItemToCart: (state, action: PayloadAction<any>) => {
            let  cartItems: any =  localStorage.getItem("cartItems")
            if(cartItems){
                 cartItems = JSON.parse(cartItems);
 
            }else{
                 cartItems  = [] 
            }
            cartItems = cartItems.map((item: any)=> {
                if(item.productId !== action.payload.productId)
                {
                    return item
                }else{
                    return action.payload
                }
            })
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            state.cartItems = cartItems
        },

        getItemFromCart: (state, action: PayloadAction<any>) => {
            let  cartItems: any =  localStorage.getItem("cartItems")
            if(cartItems){
                 cartItems = JSON.parse(cartItems);
 
            }else{
                 cartItems  = [] 
            }
            state.cartItems = cartItems
        },
    }
});



export const { addItemToCart, removeItemToCart, updateItemToCart, getItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
