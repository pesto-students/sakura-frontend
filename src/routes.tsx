import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./appStore/store";
import Home from "./pages/home";
import Test from "./pages/Test/Test";
import Cart from "./pages/cart/Cart";
import Favorite from "./pages/favorite/Favroite";
import Product from "./pages/product";
import SearchList from "./pages/searchList";
import Header from "./pages/header";

// routes prepended with "/app" shall be auth protected routes
export default function AppRoutes() {
  return (
    <ConnectedRouter history={history}>
      <Header />
      <Switch>
        {/* Public routes */}
        <Route path="/" exact={true} render={() => <Home />} />
        <Route
          path="/test"
          exact={true}
          render={() => (
            <div>
              <Test />
            </div>
          )}
        />
        <Route
          path="/cart"
          exact={true}
          render={() => (
            <div>
              <Cart />
            </div>
          )}
        />
        <Route
          path="/favorite"
          exact={true}
          render={() => (
            <div>
              <Favorite />
            </div>
          )}
        />
        <Route
          path="/product/:id"
          exact={true}
          render={() => (
            <div>
              <Product />
            </div>
          )}
        />
        <Route
          path="/search/:subCategoryId"
          exact={true}
          render={() => (
            <div>
              <SearchList />
            </div>
          )}
        />
      </Switch>
    </ConnectedRouter>
  );
}
