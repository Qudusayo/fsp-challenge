import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import Login from "./Components/Form/Login";
import Signup from "./Components/Form/Signup";

function App() {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Signup} exact />
            <Route path="*" component={Home} exact />
        </Switch>
    );
}

export default App;
