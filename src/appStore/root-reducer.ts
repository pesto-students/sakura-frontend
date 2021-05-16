import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'


import products, { productPageEpic } from "../pages/products/product.slice";
import appLayout from "../pages/appLayout/appLayout.slice";

export const rootEpic = combineEpics(
  productPageEpic
);

const createRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  appLayout,
  products
});

export default createRootReducer;