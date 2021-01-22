import React from 'react'
import axios from 'axios'


class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            isLoggedIn: false
        }

        this.state = {
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }

    }

    componentDidMount() {
        axios.get('http://localhost:3000/logincheck', this.state.config)
            .then((response) => {
                this.setState({ isLoggedIn: true })
            });
    }

    // form handler
    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }
    //login function  handler 
    submitForm = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/login', this.state)
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                this.setState({ isLoggedIn: true })
            }).catch((err) => console.log(err.response))
        this.setState({ email: '', password: '' })
    }

    render() {

        return (
            <div>
                <header id="header" class="fixed-top">
                    <div class="container d-flex">

                        <div class="logo mr-auto">
                            <h1 class="text-light"><a href="/">AstraSecurities</a></h1>

                        </div>

                        <nav class="nav-menu d-none d-lg-block">
                            <ul>
                                <li class="active"><a href="/">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#team">Team</a></li>
                                <li><a href="#contact">Contact</a></li>
                                <li class="drop-down"><a href="">Signin<i class="fa fa-angle-down"></i></a>
                                    <ul>
                                        <li><a href="signin">Login</a></li>

                                        <li><a href="signup">Register</a></li>
                                    </ul>
                                </li>


                            </ul>
                        </nav>

                    </div>
                </header>
            </div>
        )
    }

}
export default Header
