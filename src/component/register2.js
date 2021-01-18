import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';
import Header from '../component/header';
import Footer from '../component/footer2';
class Register extends React.Component {

    handleRedirect() {
        if (this.state.redirect) {
            return <Redirect to='/login' />
        }
    }

    render() {

        return (
            <div>
                <Header />

                <div className="content-wrapper1">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-12 register-container">
                                <h3 className="title1">Create an Account</h3>
                                <div className="User">

                                    <a href="register">
                                        <img src={"img/jobseaker.jpg"} className="Agent" />
                                        <div className="title">Jobseeker</div></a>



                                    <a href="agentregister">
                                        <img src={"img/emp.png"} className="Agent" />
                                        <div className="title">Employer</div></a>


                                </div>
                            </div >
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        )
    }
}
export default Register
