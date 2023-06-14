import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage/LoginFormIndex";

function App() {
    return (
        <Switch>
            <Route path="/login">
                <h1>Hello from App</h1>
                <LoginFormPage />
            </Route>
        </Switch>
    );
}

export default App;
