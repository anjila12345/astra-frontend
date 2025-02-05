import axios from 'axios'
import React from 'react'

class AdminNavi extends React.Component {
    constructor(props) {
        super(props)

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
                //alert(response.data._id);
                this.setState({
                    id: response.data._id,
                    user: response.data,
                    name: response.data.name,
                    email: response.data.email,
                    phone: response.data.phone,
                    gender: response.data.gender,
                    dob: response.data.dob
                })
            })
    }

    LogOut = () => {
        //delete token in browser and logout from backend
        axios.post('http://localhost:3000/logout')
        localStorage.removeItem('token')


    }

    render() {

        return (
            <div >
                < div className="sidebar" >
                    <div className="side-header with-border">
                        <div className="img">
                            <img src={"http://localhost:3000/image/" + this.state.user.image} id="navimg" className="img-circle" alt="avatar" />

                        </div>
                        <div className="side-title">
                            Welcome,<br />
                            <b>  {this.state.user.firstname} {this.state.user.lastname}</b>
                        </div>

                    </div>
                    <div className="sidebar-conatiner no-padding">
                        <h5>
                            <div className="menu">MENU</div></h5>
                        <ul className="nav nav-pills nav-stacked">
                            <li><a href="AdminDashboard" id="dashboard"><i className="fa fa-dashboard"></i>Dashboard</a></li>
                            <li><a href="adminprofile" id="admindetail"><i className="fa fa-user"></i>Admin Detail</a></li>
                            <li><a href="userdetails" id="userdetail"><i className="fa fa-users"></i>User Detail</a></li>
                            <li><a href="agentdetails" id="agentdetail"><i className="fa fa-users"></i>Agent Detail</a></li>
                            <li><a href="PostDetails" id="postdetail"><i className="fa fa-envelope"></i>Post Detail</a></li>

                            <li><a href="addadmin" id="createadmin"><i className="fa fa-user-plus"></i>Create Admin</a></li>

                            <li><a href="Login" onClick={this.LogOut} id="logout"><i className="fa fa-arrow-circle-o-right"></i>Logout</a></li>
                        </ul>
                    </div>
                </div >
            </div >

        )
    }


}
export default AdminNavi