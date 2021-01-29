import React, { Component } from 'react'
import axios from 'axios';

export default class applicants extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            singleFeed: {},
            post_venuetype: '',
            profileimage: '',
            name: '',
            post: [],
            user: {},
            venuename: '',
            phone: '',
            address: '',
            email: '',
            description: '',
            test: 'ssssssssssss',
            venuetype: '',
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3000/agent/logincheck', this.state.config)
            .then((response) => {
                //alert(response.data._id);
                this.setState({
                    id: response.data._id,
                    user: response.data,
                    name: response.data.name,
                    email: response.data.email,
                    phone: response.data.phone,
                })
                //alert(response.data._id)
                axios.get("http://localhost:3000/findallapplicants").then(res => {
                    console.log(res)
                    this.setState({ post: res.data })


                })

            })
    }


    handledelete(id, index) {
        axios.delete("http://localhost:3000/deleteapplicants/" + id).then((res) => {
            this.state.post.splice();
            window.location.reload();
        })
    }


    render() {
        //post design foreach loop
        const photoblog = this.state.post.map((post) => {
            return (

                <tbody>
                    <tr >
                        <td> <img src={"http://localhost:3000/image/" + post.user_id.image} className="img-circle" height="40px" width="40px" /></td>
                        <td>{post.user_id.firstname} {post.user_id.lastname}</td>
                        <td>{post.user_id.email}</td>
                        <td>{post.address}</td>
                        <td>{post.phone}</td>
                        <td>{post.citizenshipnumber}</td>
                        <td>{post.university}</td>
                        <td>{post.studylevel}</td>
                        <td>{post.year}</td>
                        <td>{post.workplace}</td>
                        <td>{post.descp}</td>
                        <td>{post.start}</td>
                        <td>{post.end}</td>
                        <td> <i className="fa fa-trash" id="trash" onClick={() => this.handledelete(post._id)}></i>
                        </td>
                    </tr>
                </tbody>

            )
        })
        return (
            <div>

                <div className="content-wrapper" style={{ marginleft: "0 px" }}>


                    <section id="candidates" className="content-header1">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-9 bg-white padding-2">
                                    <form action="#" method="post" enctype="multipart/form-data" className="p-5 bg-white">
                                        <div className="col-md-12">

                                            <h3 className="mb-3 color-blue"><b>User Details</b></h3>

                                            <div className='row post'>
                                                <table id="example2" className="table">
                                                    <thead id="thead">
                                                        <tr>
                                                            <th>Profile</th>
                                                            <th>Fullname</th>
                                                            <th>Email</th>
                                                            <th>Address</th>
                                                            <th>Number</th>
                                                            <th>CitizenShip</th>
                                                            <th>University</th>
                                                            <th>StudyLevel</th>
                                                            <th>Year</th>
                                                            <th>Workplace</th>
                                                            <th>Description</th>
                                                            <th>JobStart</th>
                                                            <th>JobEnd</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    {photoblog}
                                                </table>

                                            </div >
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>



                </div>

            </div >

        )
    }
}
