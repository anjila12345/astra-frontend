import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';

class Editprofilepage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            user: '',
            image: '',
            imagePreviewUrl: '',
            config: {
                headers: {
                    'content-type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
        }
    }



    handleImageChange = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    }


    componentDidMount() {
        axios.get('http://localhost:3000/logincheck', this.state.config)
            .then((response) => {
                //S alert(response.data.fname)
                this.setState({
                    user: response.data,
                    id: response.data._id,
                    firstname: response.data.firstname,
                    lastname: response.data.lastname,
                    username: response.data.username,
                    email: response.data.email,
                    password: response.data.password
                })

            })

    }

    UpdateData = () => {
        const data = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
            email: this.state.email,
            image: (this.state.image, this.state.image.name),
            password: this.state.password
        }
        axios.put("http://localhost:3000/userupdate/" + this.state.id, data).then(
            setTimeout(function () {
                alert("Successfully updated");
                window.location.reload();
            }, 1000)
        )

    }
    handlechange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }

    render() {

        return (
            <div >

                <div className="content-wrapper1">

                    <section id="candidates" className="content-header">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-9 bg-white padding-2">
                                    <div className="title-post">
                                        <h1><i>Profile</i></h1>
                                    </div>
                                    <div className="box box-primary">
                                        <div className="img-form">
                                            <div className="img-row">
                                                <img src={"http://localhost:3000/image/" + this.state.user.image} width="150px" height="150px" className="" alt="avatar" />

                                                <div className="imgrow1">
                                                    <h4 ><b >{this.state.user.firstname} {this.state.user.lastname} </b></h4>
                                                    <h5 >{this.state.user.email}</h5>
                                                </div>
                                                <div className="form-group" id="updatebtn">
                                                    <button type="button" type="submit" id="save" onClick={this.UpdateData} className="btn-update">Save</button>
                                                </div>
                                            </div>
                                            <input type="file" name="image" onChange={(e) => this.handleImageChange(e)}
                                                id="imgedit" className="form-control" />

                                        </div>

                                        <form>
                                            <div className="box-body">
                                                <div className="title-box">
                                                    <h2>Account Information</h2>
                                                </div>
                                                <div class="row">
                                                    <div className="col-xs-6 form-group">
                                                        <label >First Name</label>
                                                        <input type="text" className="form-control" id="fname" name="firstname" placeholder="First Name" value={this.state.firstname} onChange={this.handlechange} />

                                                    </div>
                                                    <div className="col-xs-6 form-group">
                                                        <label >Last Name</label>
                                                        <input type="text" className="form-control" id="lname" name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.handlechange} />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label for="email">Email address</label>
                                                    <input type="email" className="form-control" id="email" placeholder="Email" value={this.state.user.email} readonly />
                                                </div>

                                                <div className=" form-group">
                                                    <label for="number">Username</label>
                                                    <input type="text" name="username" className="form-control" id="username" placeholder="Username" value={this.state.username} onChange={this.handlechange} />
                                                </div>




                                                <div className=" form-group">
                                                    <label for="password">Password</label>
                                                    <input type="text" className="form-control" id="password" placeholder="New Password" value={this.state.user.password} readonly />
                                                </div>
                                                <div className="form-group">
                                                    <button type="button" type="submit" id="Submit" onClick={this.UpdateData} className="btn btn-flat btn-primary">Submit</button>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>



            </div>

        )
    }
}
export default Editprofilepage
