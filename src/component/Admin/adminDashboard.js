import React, { Component } from 'react'
import AdminNavi from './AdminNavi'
import Header from '../../component/Admin/header';
import Footer from '../../component/footer2';

export default class adminDashboard extends Component {
    render() {
        return (
            <div>
                <Header />
                <AdminNavi />
                <div className="content-wrapper1" style={{ marginleft: "0 px" }}>
                    <section id="candidates" className="content-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9 bg-white1 padding-2">
                                    <div className="box-header1 with-border">
                                        <h3 className="box-title">Dashboard<b></b></h3>
                                    </div>
                                    <div className="row">
                                        <div className="admin-body">
                                            <a href="adminprofile">
                                                <div className="admin-cont">
                                                    <i className="fa fa-user"></i>
                                                    <div className="admintitle">
                                                        <h4>Admin Profile </h4>
                                                    </div>
                                                </div></a>
                                            <a href="userdetails">
                                                <div className="admin-cont">
                                                    <i className="fa fa-users"></i>
                                                    <div className="admintitle">
                                                        <h4>Users </h4>
                                                    </div>
                                                </div></a>

                                            <a href="PostDetails">
                                                <div className="admin-cont">
                                                    <i className="fa fa-envelope"></i>
                                                    <div className="admintitle">
                                                        <h4>Posts</h4>
                                                    </div>
                                                </div></a>
                                            <a href="agentdetails">
                                                <div className="admin-cont">
                                                    <i className="fa fa-users"></i>
                                                    <div className="admintitle">
                                                        <h4>Agent Details</h4>
                                                    </div>
                                                </div></a>

                                        </div>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </section>

                </div>
                <Footer />
            </div>

        )
    }
}
