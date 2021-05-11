import React from "react";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import { ProductList } from "./pages/products/product";
import { ConnectedRouter } from 'connected-react-router'
import { history } from "./appStore/store"

// routes prepended with "/app" shall be auth protected routes
export default function AppRoutes() {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                {/* Public routes */}
                <Route path="/home" exact={true} render={() => <div>Home Page</div>}/>
                <Route path="/" exact={true} render={() => <div> <ProductList/></div>}/>
                
                {/* Auth Routes */}
                <Route path="/auth/login" exact={true} render={() => <div>Login</div>}/>
                <Route path="/auth/signup" exact={true} render={() => <div>Signup</div>}/>
                <Route path="/auth/reset-password" exact={true} render={() => <div>Reset Password</div>}/>
                
                {/* Routes protected by auth */}
                <Route path="/app/checkout" exact={true} render={() => <div>Checkout</div>}/>
                <Route path="/app/profile" exact={true} render={() => <div>Profile</div>}/>
                <Route path="/app/profile" exact={true} render={() => <div>Profile</div>}/>

            </Switch>
        </ConnectedRouter>

    );
}