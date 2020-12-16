import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

//Components


import Loginpage from './container/login'
import Home from './container/home'
import Signup from './container/signup'
import userdash from './container/userdashboard'
import Editprofile from '././container/Users/editprofile'


// import Login from './container/Agent/login'

// import Register from './container/Agent/register'

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Loginpage} />
                    <Route exact path="/register" component={Signup} />
                    {/* <Route exact path="/agentlogin" component={Login} />
                    <Route exact path="/agentregister" component={Register} /> */}
                    <Route exact path="/Userdashboard" component={userdash} />
                    <Route exact path="/Editprofile" component={Editprofile} />
                </Switch>
            </BrowserRouter>
        )

    }
}
export default Router;