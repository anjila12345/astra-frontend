import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import Newsfeedpage from '../../component/Users/Newsfeed';
import Header from '../../component/Users/header';
import Footer from '../../component/footer2';
import axios from 'axios'
class Newsfeed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
        this.state = {
            user: {},
            id: "",
            posts: [],

            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/logincheck', this.state.config)
            .then((response) => {
                this.setState({
                    id: response.data._id,
                    isLoggedIn: true,
                    user: response.data
                })
            });
        axios.get("http://localhost:3000/findallpost").then(res => {
            this.setState({ posts: res.data });
        })
        console.log(this.state.posts)
    }

    render() {
        if (this.state.isLoggedIn === false) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <Header />
                <Newsfeedpage post={this.state.posts} user={this.state.user} />
                <Footer />
            </div>

        )
    }


}
export default Newsfeed