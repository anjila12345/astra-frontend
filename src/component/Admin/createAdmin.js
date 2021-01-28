import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';
import AdminNavi from './AdminNavi'

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
            role: this.state.role,
        }
        axios.post('http://localhost:3000/register', data).then(() => {

            this.setState({
                redirect: true
            });
            setTimeout(function () {
                alert('Admin created successfully')

                window.location.reload()
            }, 1000);
        })



    }

    handleRedirect() {
        if (this.state.redirect) {
            return <Redirect to='/createAdmin' />
        }
    }

    render() {

        return (
            <div>
                {this.handleRedirect()}
                <AdminNavi/>
<div className="content-wrapper1">
                <div className="register-box">

                    <div className="register-box-body">

                        <form>
                            <p className="login-box-msg"> <b>Register Admin User </b></p>
                            <div className="form-group has-feedback">
                                <input className="form-control input" type="text" value={this.state.firstname} onChange={(event) =>
                                    this.setState({ firstname: event.target.value })} placeholder="First name" required />
                                <error className="errormsg">
                                    {this.state.fnameerror}
                                </error>
                                <span class="glyphicon glyphicon-user form-control-feedback"></span>

                            </div>
                            <div className="  form-group has-feedback">
                                <input className="form-control input" type="text" value={this.state.lastname} onChange={(event) =>
                                    this.setState({ lastname: event.target.value })} placeholder="Last name" required />
                                <error className="errormsg">
                                    {this.state.lnameerror}
                                </error>
                                <span class="glyphicon glyphicon-user form-control-feedback"></span>

                            </div>

                            <div className="form-group has-feedback">
                                <input className="form-control input" type="email" value={this.state.email} onChange={(event) =>
                                    this.setState({ email: event.target.value })} placeholder="Email" required />
                                <error className="errormsg">
                                    {this.state.emailerror}
                                </error>
                                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>

                            </div>
                            <div className="form-group has-feedback">

                                <input className="form-control input" type="text" value={this.state.username} onChange={(event) =>
                                    this.setState({ username: event.target.value })} placeholder="Username" required />
                                <error className="errormsg">
                                    {this.state.numbererror}
                                </error>
                                <span class="glyphicon glyphicon-phone form-control-feedback"></span>

                            </div>

                            <div className="form-group has-feedback">

                                <input className="form-control input" type="text" value={this.state.role} onChange={(event) =>
                                    this.setState({ role: event.target.value })} placeholder="Admin" required />
                                <error className="errormsg">
                                    {this.state.numbererror}
                                </error>
                                <span class="glyphicon glyphicon-phone form-control-feedback"></span>

                            </div>


                            <div className="form-group has-feedback">

                                <input className="form-control input" type="password" value={this.state.password} onChange={(event) =>
                                    this.setState({ password: event.target.value })} placeholder="Password" required />
                                <error className="errormsg">
                                    {this.state.passworderror}
                                </error>
                                <span className="glyphicon glyphicon-lock form-control-feedback"></span>

                            </div>


                            <button type="submit" className="btn btn-primary btn-block btn-flat" onClick={this.sendUser}>Sign Up</button>
                            
                        </form>
                        
                    </div>

                    </div>


                </div>
            </div>


        )
    }
}
export default Signuppage
