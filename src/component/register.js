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
        axios.post('http://localhost:3000/register', data).then(() => {

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
            return <Redirect to='/login' />
        }
    }

    render() {

        return (
            <div>
                {this.handleRedirect()}

                <div className="register-box">

                    <div className="register-box-body">
                        <div className="register-logo">
                            <b>Register Here</b>
                        </div>

                        <form>
                            <div className="row">
                                <div className="col-xs-6 form-group has-feedback">
                                    <input className="form-control" type="text" value={this.state.firstname} onChange={(event) =>
                                        this.setState({ firstname: event.target.value })} placeholder="First name" required />
                                    <error className="errormsg">
                                        {this.state.fnameerror}
                                    </error>
                                    <span class="glyphicon glyphicon-user form-control-feedback1"></span>

                                </div>
                                <div className=" col-xs-6 form-group has-feedback">
                                    <input className="form-control" type="text" value={this.state.lastname} onChange={(event) =>
                                        this.setState({ lastname: event.target.value })} placeholder="Last name" required />
                                    <error className="errormsg">
                                        {this.state.lnameerror}
                                    </error>
                                    <span class="glyphicon glyphicon-user form-control-feedback1"></span>

                                </div>
                            </div>
                            <div className="form-group has-feedback">
                                <input className="form-control" type="email" value={this.state.email} onChange={(event) =>
                                    this.setState({ email: event.target.value })} placeholder="Email" required />
                                <error className="errormsg">
                                    {this.state.emailerror}
                                </error>
                                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>

                            </div>
                            <div className="form-group has-feedback">

                                <input className="form-control" type="text" value={this.state.username} onChange={(event) =>
                                    this.setState({ username: event.target.value })} placeholder="Username" required />
                                <error className="errormsg">
                                    {this.state.numbererror}
                                </error>
                                <span class="glyphicon glyphicon-phone form-control-feedback"></span>

                            </div>


                            <div className="form-group has-feedback">

                                <input className="form-control" type="password" value={this.state.password} onChange={(event) =>
                                    this.setState({ password: event.target.value })} placeholder="Password" required />
                                <error className="errormsg">
                                    {this.state.passworderror}
                                </error>
                                <span className="glyphicon glyphicon-lock form-control-feedback"></span>

                            </div>
                            <div class="row">
                                <div class="col-xs-8">
                                    <a href="login">Already have an Account ?</a>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block btn-flat" onClick={this.sendUser}>Sign Up</button>

                        </form>
                    </div>




                </div>
            </div>


        )
    }
}
export default Signuppage
