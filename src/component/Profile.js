import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';

import Mypostpage from './Agent/mypost';

class Profile extends React.Component {
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

                                    <div className="box box-primary">
                                        <div className="img-form">
                                            <div className="title-post">
                                                <h2><i>Profile</i></h2>
                                            </div>
                                            <div className="img-row">
                                                <img src={"http://localhost:3000/image/" + this.state.user.image} width="150px" height="150px" className="" alt="avatar" />

                                                <div className="imgrow1">
                                                    <h4 ><b >{this.state.user.firstname} {this.state.user.lastname} </b></h4>
                                                    <h5 >{this.state.user.email}</h5>
                                                </div>
                                                <div className="form-group" id="updatebtn">
                                                <button type="button" type="submit" className="btn-follow" style={{fontSize:'16px', backgroundColor:'#2a58bd', padding:'10px'}}>Follow</button>                                                </div>

                                            </div>
                                            
                                                <div className="follow" style={{display: 'flex', justifyContent: 'space-evenly', padding: '20px'}}>
                                                <button style={{display:'inline-block', fontSize:'20px'}}>Followers </button>
                                                <button style={{display:'inline-block', fontSize:'20px'}}>Following </button>
                                                </div>
                                        </div>

                                        




                                        </div>
                                        <div className="posts" style={{marginLeft:'10px'}}>
                                        <Mypostpage/>
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
export default Profile
