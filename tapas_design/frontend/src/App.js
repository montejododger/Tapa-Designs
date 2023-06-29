import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SigupPage/index.js";
import ProductHome from "./components/products/ProductHome";
import ProductShow from "./components/products/ProductShow";
import Navigation from "./components/Navigation";
import BottomBanner from "./components/Navigation/BottomBanner";
import HomeSplash from "./components/HomeSplash/HomeSplash";
import ReviewHome from "./components/Reviews/ReviewHome";

function App() {
    return (
        <>
            <div className="whole-app-wrapper">
                <Navigation />
                <Switch>
                    <Route exact path="/products/:productId">
                        <ProductShow />
                        <ReviewHome/>
                    </Route>
                    <Route exact path="/products">
                        <ProductHome />
                    </Route>
                    <Route path="/login">
                        <LoginFormPage />
                    </Route>
                    <Route path="/signup">
                        <SignupFormPage />
                    </Route>
                    <Route exact path="/">
                        <HomeSplash />
                    </Route>
                </Switch>
                <BottomBanner />
            </div>
        </>
    );
}

export default App;
