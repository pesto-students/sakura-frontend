import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'


// ************* Reducers *********************
import appLayout from "../pages/appLayout/appLayout.slice";


// *************** Epics ***************
import products, { productPageEpic } from "../pages/products/product.slice";
import home, { homeEpic } from '../pages/home/home.slice';

export const rootEpic = combineEpics(
  productPageEpic,
  homeEpic
);

const createRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  home,
  appLayout,
  products
});

export default createRootReducer;