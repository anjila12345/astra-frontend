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
        axios.get('http://localhost:3000/logincheck', this.state.config)
            .then((response) => {
                this.setState({
                    isLoggedIn: true,
                    user: response.data
                })
            });




    }
    LogOut = () => {
        axios.post('http://localhost:3000/userlogout')
        localStorage.removeItem('token')
    }

    render() {

        return (
            <div>
                <header class="main-header">

                    <a href="/" class="logo  ">
                        <span class="logo-lg"><h1><b>Astra</b><b>Securities</b></h1></span>
                    </a>


                    <nav class="navbar navbar-static-top">
                        <div class="searchbar">
                            <input id="textbox" type="text" placeholder="Enter to search" />
                            <i class="fa fa-search"></i>

                        </div>
                        <div class="navbar-custom-menu">
                            <div class="navbar-custom">
                                <a href="Newsfeed">
                                    <div class="title"><i class="fa fa-home"></i>Home</div></a>

                                <a href="Editprofile">
                                    <div class="title"><i class="	fa fa-plus"></i>Profile</div></a>



                                <a href="Editprofile">
                                    <div class="title">
                                        <img src={"http://localhost:3000/image/" + this.state.user.image} id="userimg" className="img-circle" alt="avatar" />
                                        {this.state.user.firstname}
                                    </div></a>


                                <a href="Login" onClick={this.LogOut}>  <i class="fa fa-sign-out">Logout</i> </a>

                            </div>
                        </div>
                    </nav>
                </header>
            </div>

        )
    }


}
export default Header
