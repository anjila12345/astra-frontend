import React from 'react'
import axios from 'axios'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
        this.state = {
            id: '',
            singleFeed: {},
            post_status: '',
            profileimage: '',
            name: '',
            post: [],
            user: {},
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/agent/logincheck', this.state.config)
            .then((response) => {
                this.setState({
                    isLoggedIn: true,
                    user: response.data
                })
            });


    }
    LogOut = () => {
        axios.post('http://localhost:3000/agent/logout')
        localStorage.removeItem('token')
    }

    render() {

        return (
            <div>
                <header className="main-header">

                    <a href="/" className="logo  ">
                        <span className="logo-lg"><h1><b>Astra</b><b>Securities</b></h1></span>
                    </a>


                    <nav className="navbar navbar-static-top">

                        <div className="navbar-custom-menu">
                            <div className="navbar-custom">
                                <a href="Newsfeed">
                                    <div className="title"><i className="fa fa-home"></i>Home</div></a>

                                <a href="agentprofile">
                                    <div className="title"><i className="	fa fa-user"></i>Profile</div></a>

                                <a href="postjob">
                                    <div className="title"><i className="	fa fa-plus"></i>Post
                </div></a>

                                <a href="mypost">
                                    <div className="title"><i className="	fa fa-newspaper-o"></i>Mypost
                </div></a>

                                <a href="agentprofile">
                                    <div className="title">

                                        {this.state.user.firstname}
                                    </div></a>


                                <a href="agentlogin" onClick={this.LogOut}>  <i class="fa fa-sign-out">Logout</i> </a>

                            </div>
                        </div>
                    </nav>
                </header>
            </div>

        )
    }


}
export default Header
