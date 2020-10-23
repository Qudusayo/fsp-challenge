import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Home  from './Components/Home'
import Form from './Components/Form'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" exact component={Form} />
            </Switch>
        );
    }
}

export default App;