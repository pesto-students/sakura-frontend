// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: {
//       items: []
//     } as ProductState,
//     reducers: {
//       requestProductsByFilter: (state, action) => {
//         state.selectedProductCategories = action.payload.productCategories;
//       },
//       responseOfGetProducts: (state, action) => {
//         console.log(action.payload);
//         state.items = action.payload;
//       },
//       errorResponse: (state, action) => {
//         console.log(action.type);
//       }
//     }
//   });


export type CartState = {
    items: []
}