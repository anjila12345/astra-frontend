import React from 'react'
import axios from 'react'



class Indexpage extends React.Component {

    render() {

        return (

            <div>
                <section id="hero">
                    <div class="hero-container" data-aos="fade-up">
                        <h1>Welcome to Astrasecurities</h1>

                        <a href="login" class="btn-get-started scrollto">Get Started</a>
                    </div>
                </section>
                <main id="main">
                    <div id="about" class="about-area area-padding">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 col-xs-12">
                                    <div class="section-headline text-center">
                                        <h2>About Us</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-6 ">
                                    <div class="well-left">
                                        <div class="single-well">
                                            <a href="#">
                                                <img id="aboutimg" src="../img/2.jpg" alt="" />
                                            </a>
                                        </div>
                                    </div>

                                </div>

                                <div class="col-xs-6 ">
                                    <div class="well-middle">
                                        <div class="single-well">
                                            <a href="#">
                                                <h4 class="sec-head"></h4>
                                            </a>
                                            <p>
                                                As the digital space and a whole array of connected gadgets are penetrating into the remote recesses of personal life, the demand for advanced and custom security solutions are steadily increasing. Our Security App Development processes take care of such varied security needs in different contexts. We aim to provide job to everyone easily through our app. </p>
                                            <ul>
                                                <li>
                                                    <i class="fa fa-check"></i> Job Posting
                                                    </li>
                                                <li>
                                                    <i class="fa fa-check"></i> Profile Management
                                                    </li>
                                                <li>
                                                    <i class="fa fa-check"></i> Hire Guard
                                                    </li>

                                                <li>
                                                    <i class="fa fa-check"></i> Rating and Review Jobs
                                                    </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div id="services" class="services-area area-padding">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 col-xs-12">
                                    <div class="section-headline services-head text-center">
                                        <h2>Our Services</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="row text-center">

                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="about-move">
                                        <div class="services-details">
                                            <div class="single-services">
                                                <a class="services-icon" href="#">
                                                    <i class="fa fa-gear"></i>
                                                </a>
                                                <h4>Profile Management</h4>
                                                <p>
                                                    The client can register, login, create & manage his/her profile.
                  </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="about-move">
                                        <div class="services-details">
                                            <div class="single-services">
                                                <a class="services-icon" href="#">
                                                    <i class="fa fa-camera-retro"></i>
                                                </a>
                                                <h4>Job Posting</h4>
                                                <p>
                                                    The client can post job/ jobs as per the need, the customer can specify the job type.
                  </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-12">

                                    <div class=" about-move">
                                        <div class="services-details">
                                            <div class="single-services">
                                                <a class="services-icon" href="#">
                                                    <i class="fa fa-users"></i>
                                                </a>
                                                <h4>Hire</h4>
                                                <p>
                                                    The client can hire a contractor or guard for a specific period of time.
                  </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-12">

                                    <div class=" about-move">
                                        <div class="services-details">
                                            <div class="single-services">
                                                <a class="services-icon" href="#">
                                                    <i class="fa fa-search"></i>
                                                </a>
                                                <h4>Search for job </h4>
                                                <p>
                                                    The client can search for a suitable contractor or agency as per the need. </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-4 col-xs-12">

                                    <div class=" about-move">
                                        <div class="services-details">
                                            <div class="single-services">
                                                <a class="services-icon" href="#">
                                                    <i class="fa fa-user-plus"></i>
                                                </a>
                                                <h4>Follow</h4>
                                                <p>
                                                    The client can follow agent account for detail information about job.
                  </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-4 col-xs-12">

                                    <div class=" about-move">
                                        <div class="services-details">
                                            <div class="single-services">
                                                <a class="services-icon" href="#">
                                                    <i class="fa fa-star"></i>
                                                </a>
                                                <h4>Rating & Reviews</h4>
                                                <p>
                                                    After completion of the job, the client can drop his feedback.  </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        )
    }


}
export default Indexpage
