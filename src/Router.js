import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

//Components


import Loginpage from './container/login'
import Home from './container/home'
import Signup from './container/signup'
import userdash from './container/userdashboard'
import Editprofile from '././container/Users/editprofile'
import Newsfeed from '././container/Users/Newsfeed'

// Agent
import Login from './container/Agent/login'
import Agentregister from './container/Agent/register'
import Register2 from './component/register2'
import Agentprofile from './container/Agent/editprofile'
import Postjob from './container/Agent/addjob'
import Mypost from './container/Agent/mypost'

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Loginpage} />
                    <Route exact path="/register" component={Signup} />
                    <Route exact path="/agentlogin" component={Login} />
                    <Route exact path="/signup" component={Register2} />
                    <Route exact path="/agentregister" component={Agentregister} />
                    <Route exact path="/Userdashboard" component={userdash} />
                    <Route exact path="/Editprofile" component={Editprofile} />
                    <Route exact path="/agentprofile" component={Agentprofile} />
                    <Route exact path="/postjob" component={Postjob} />
                    <Route exact path="/mypost" component={Mypost} />
                    <Route exact path="/Newsfeed" component={Newsfeed} />
                </Switch>
            </BrowserRouter>
        )

    }
}
export default Router;