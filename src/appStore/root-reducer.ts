import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'


// ************* Reducers *********************
import appLayout from "../pages/appLayout/appLayout.slice";


// *************** Epics ***************
import home, { homeEpic } from '../pages/home/home.slice';
import product, { productEpic } from "../pages/product/product.slice"
import cart from "../pages/cart/cart.slice"
import header, { headerEpic } from '../pages/header/header-slice';

export const rootEpic = combineEpics(
  homeEpic,
  productEpic,
  headerEpic
);

const createRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  home,
  appLayout,
  product,
  cart,
  header
});

export default createRootReducer;