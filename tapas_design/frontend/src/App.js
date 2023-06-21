import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SigupPage";
import ProductIndex from "./components/products/ProductIndexPage/ProductIndex";
import Navigation from "./components/Navigation";
import BottomBanner from "./components/Navigation/BottomBanner";
import HomeSplash from "./components/HomeSplash/HomeSplash";

function App() {
    return (
        <>
            <div className="whole-app">
                <Navigation />
                <Switch>
                    <Route path='/products'>
                        <ProductIndex/>
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
