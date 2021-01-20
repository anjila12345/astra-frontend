import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';

class Signuppage extends React.Component {
    constructor() {
        super();
        this.state = {
            'firstname': '',
            'lastname': '',
            'username': '',
            'email': '',
            'password': '',
            'role': '',
            redirect: false,


        }
    }

    sendUser = (e) => {
        e.preventDefault();

        const data = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        }
        axios.post('http://localhost:3000/agent/register', data).then(() => {

            this.setState({
                redirect: true
            });
            setTimeout(function () {
                window.location.reload()
            }, 1000);
        })



    }

    handleRedirect() {
        if (this.state.redirect) {
            return <Redirect to='/agentlogin' />
        }
    }

    render() {

        return (
            <div>
                {this.handleRedirect()}

                <div className="register-box">

                    <div className="register-box-body">

                        <form>
                            <p className="login-box-msg"> <b>Register Here </b></p>
                            <div className="form-group has-feedback">
                                <input className="form-control input" type="text" id="firstname" value={this.state.firstname} onChange={(event) =>
                                    this.setState({ firstname: event.target.value })} placeholder="First name" required />
                                <error className="errormsg">
                                    {this.state.fnameerror}
                                </error>
                                <span class="glyphicon glyphicon-user form-control-feedback"></span>

                            </div>
                            <div className="  form-group has-feedback">
                                <input className="form-control input" type="text" id="lastname" value={this.state.lastname} onChange={(event) =>
                                    this.setState({ lastname: event.target.value })} placeholder="Last name" required />
                                <error className="errormsg">
                                    {this.state.lnameerror}
                                </error>
                                <span class="glyphicon glyphicon-user form-control-feedback"></span>

                            </div>

                            <div className="form-group has-feedback">
                                <input className="form-control input" type="email" id="email" value={this.state.email} onChange={(event) =>
                                    this.setState({ email: event.target.value })} placeholder="Email" required />
                                <error className="errormsg">
                                    {this.state.emailerror}
                                </error>
                                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>

                            </div>
                            <div className="form-group has-feedback">

                                <input className="form-control input" type="text" id="username" value={this.state.username} onChange={(event) =>
                                    this.setState({ username: event.target.value })} placeholder="Username" required />
                                <error className="errormsg">
                                    {this.state.numbererror}
                                </error>
                                <span class="glyphicon glyphicon-phone form-control-feedback"></span>

                            </div>


                            <div className="form-group has-feedback">

                                <input className="form-control input" type="password" id="password" value={this.state.password} onChange={(event) =>
                                    this.setState({ password: event.target.value })} placeholder="Password" required />
                                <error className="errormsg">
                                    {this.state.passworderror}
                                </error>
                                <span className="glyphicon glyphicon-lock form-control-feedback"></span>

                            </div>


                            <button type="submit" className="btn btn-primary btn-block btn-flat" id="Signup" onClick={this.sendUser}>Sign Up</button>
                            <div class="form-group textlogin">
                                <a href="agentlogin" id="loginf">Already have an Account ?</a>
                            </div>
                        </form>
                    </div>




                </div>
            </div>


        )
    }
}
export default Signuppage
