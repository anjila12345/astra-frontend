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
<<<<<<< Updated upstream
=======
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
                    <section id="counts" class="counts">
                        <div class="container counts-text ">

                            <div class="row counters">

                                <div class="col-lg-3 col-6  text-center">
                                    <span data-toggle="counter-up">1,000<i class="fa fa-plus" ></i></span>
                                    <p>Jobs</p>
                                </div>

                                <div class="col-lg-3 col-6  text-center">
                                    <span data-toggle="counter-up">463</span>
                                    <p>Support</p>
                                </div>

                                <div class="col-lg-3 col-6  text-center">
                                    <span data-toggle="counter-up">1,464</span>
                                    <p>Clients</p>
                                </div>

                                <div class="col-lg-3 col-6  text-center">
                                    <span data-toggle="counter-up">6</span>
                                    <p>Team Members</p>
                                </div>

                            </div>

                        </div>
                    </section>
                    <div id="team" class="our-team-area area-padding">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 col-xs-12">
                                    <div class="section-headline text-center">
                                        <h2>Our special Team</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="single-team-member">
                                        <div class="team-img">
                                            <a href="#">
                                                <img src="../img/2.jpg" alt="" id="teamimg" />
                                            </a>
                                            <div class="team-social-icon text-center">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i class="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="fa fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="team-content text-center">
                                            <h4>Sahara Magar</h4>
                                            <p>SEO</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="single-team-member">
                                        <div class="team-img">
                                            <a href="#">
                                                <img src="../img/2.jpg" alt="" id="teamimg" />
                                            </a>
                                            <div class="team-social-icon text-center">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i class="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="fa fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="team-content text-center">
                                            <h4>Nischal Tripathi </h4>
                                            <p>Developer</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="single-team-member">
                                        <div class="team-img">
                                            <a href="#">
                                                <img src="../img/2.jpg" alt="" id="teamimg" />
                                            </a>
                                            <div class="team-social-icon text-center">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i class="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="fa fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="team-content text-center">
                                            <h4>Bihev Rawal </h4>
                                            <p>Developer</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="single-team-member downmember">
                                        <div class="team-img">
                                            <a href="#">
                                                <img src="../img/2.jpg" alt="" id="teamimg" />
                                            </a>
                                            <div class="team-social-icon text-center">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i class="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="fa fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="team-content text-center">
                                            <h4>Bhupendra Sharma </h4>
                                            <p>Developer</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="single-team-member downmember">
                                        <div class="team-img">
                                            <a href="#">
                                                <img src="../img/2.jpg" alt="" id="teamimg" />
                                            </a>
                                            <div class="team-social-icon text-center">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i class="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="fa fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="team-content text-center">
                                            <h4>Anjila Subedi</h4>
                                            <p>Developer</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <div class="single-team-member downmember">
                                        <div class="team-img">
                                            <a href="#">
                                                <img src="../img/2.jpg" alt="" id="teamimg" />
                                            </a>
                                            <div class="team-social-icon text-center">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i class="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="fa fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="team-content text-center">
                                            <h4>Samita Gautam</h4>
                                            <p>Developer</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="reviews-area">
                        <div class="row no-gutters">

                            <div class="col-lg-6 work-right-text d-flex align-items-center">
                                <div class="textcontact text-center">
                                    <h2>working with us</h2>
                                    <h5>Learn about various job related post as well as gurantee of jobs.</h5>
                                    <a href="#contact" class="ready-btn scrollto">Contact us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="contact" class="contact-area">
                        <div class="contact-inner area-padding">
                            <div class="contact-overly"></div>
                            <div class="container ">
                                <div class="row">
                                    <div class="col-md-12 col-sm-12 col-xs-12">
                                        <div class="section-headline text-center">
                                            <h2>Contact us</h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">

                                    <div class="col-md-4 col-sm-4 col-xs-12">
                                        <div class="contact-icon text-center">
                                            <div class="single-icon">
                                                <i class="fa fa-mobile"></i>
                                                <p>
                                                    Call: +123 456 789<br />
                                                    <span>Monday-Friday (9am-5pm)</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4 col-sm-4 col-xs-12">
                                        <div class="contact-icon text-center">
                                            <div class="single-icon">
                                                <i class="fa fa-envelope-o"></i>
                                                <p>
                                                    Email: astra@gmail.com<br />
                                                    <span>Web: www.astra.com</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4 col-sm-4 col-xs-12">
                                        <div class="contact-icon text-center">
                                            <div class="single-icon">
                                                <i class="fa fa-map-marker"></i>
                                                <p>
                                                    Location: Kathmandu, Nepal<br />
                                                    <span>Dillibazar, Kathmandu</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">


                                    <div class="col-md-6 col-sm-6 col-xs-12">

                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27689201412!2d85.29111313454997!3d27.70903193365019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2z4KSV4KS-4KSg4KSu4KS-4KSh4KWM4KSBIDQ0NjAw!5e0!3m2!1sne!2snp!4v1567882901888!5m2!1sne!2snp" width="100%" height="380" frameborder="0" allowfullscreen></iframe>

                                    </div>



                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <div class="form contact-form">
                                            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                                                <div class="form-group">
                                                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                                    <div class="validate"></div>
                                                </div>
                                                <div class="form-group">
                                                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                                    <div class="validate"></div>
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                    <div class="validate"></div>
                                                </div>
                                                <div class="form-group">
                                                    <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                                    <div class="validate"></div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="loading">Loading</div>
                                                    <div class="error-message"></div>
                                                    <div class="sent-message">Your message has been sent. Thank you!</div>
                                                </div>
                                                <div class="text-center"><button type="submit">Send Message</button></div>
                                            </form>
                                        </div>
                                    </div>

>>>>>>> Stashed changes
                                </div>

                            </div>
                        </div>
                    </div>
<<<<<<< Updated upstream
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
=======

>>>>>>> Stashed changes
                </main>
            </div>

        )
    }


}
export default Indexpage
