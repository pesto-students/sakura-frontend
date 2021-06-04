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
import favorite from "../pages/favorite/favorite.slice"
import auth, { authEpic } from "../pages/authenticator/authenticator.slice";
import searchList, { searchListEpic } from '../pages/searchList/searchList.slice';

export const rootEpic = combineEpics(
  homeEpic,
  productEpic,
  headerEpic,
  authEpic,
  searchListEpic
);

const createRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  home,
  appLayout,
  product,
  cart,
  header,
  favorite,
  auth,
  searchList
});

export default createRootReducer;