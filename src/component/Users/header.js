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
                <header class="main-header">

                    <a href="/" class="logo  ">
                        <span class="logo-lg"><h1><b>Astra</b><b>Securities</b></h1></span>
                    </a>


                    <nav class="navbar navbar-static-top">

                        <div class="navbar-custom-menu">
                            <div class="navbar-custom">
                                <a href="Newsfeed">
                                    <div class="title"><i class="fa fa-home"></i>Home</div></a>

                                <a href="blog">
                                    <div class="title"><i class="	fa fa-plus"></i>Post</div></a>

                                <a href="Mypost">
                                    <div class="title"><i class="	fa fa-newspaper-o"></i>User post
                </div></a>





                            </div>
                        </div>
                    </nav>
                </header>
            </div>

        )
    }


}
export default Header
