import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'


// ************* Reducers *********************
import appLayout from "../pages/appLayout/appLayout.slice";


// *************** Epics ***************
import products, { productPageEpic } from "../pages/products/product.slice";
import home, { homeEpic } from '../pages/home/home.slice';
import product, {productEpic} from "../pages/product/product.slice"

export const rootEpic = combineEpics(
  productPageEpic,
  homeEpic,
  productEpic
);

const createRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  home,
  appLayout,
  products,
  product
});

export default createRootReducer;