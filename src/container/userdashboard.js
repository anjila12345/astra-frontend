import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import Userdashboard from '../component/Userdashboard';
import Header from '../component/Users/header';
import Footer from '../component/footer';
import axios from 'axios'
class userdash extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
        this.state = {
            user: {},
            id: "",
            posts: [],
            comment: "",
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

    }

    render() {
        if (this.state.isLoggedIn === false) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <Header />
                <Userdashboard />
                <Footer />




            </div>

        )
    }


}
export default userdash