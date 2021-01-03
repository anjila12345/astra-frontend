import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';

class Mypostpage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            singleFeed: {},
            profileimage: '',
            name: '',
            post: [],
            user: {},
            description: '',
            title: '',
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
                    firstname: response.data.firstname,
                    lastname: response.data.lastname,
                    email: response.data.email,
                    username: response.data.username,

                })
                axios.get('http://localhost:3000/findblogbyuserid/' + response.data._id, this.state.config)
                    .then((response) => {
                        console.log(response.data)
                        this.setState({ post: response.data })


                    })

            })
    }

    updateFeed = (id) => {
        axios.get(`http://localhost:3000/singleblog/${id}`).then((response) => {
            // console.log(response);
            //alert(response.data.singleFeed.user_id)
            this.setState({
                singleFeed: response.data,
                description: response.data.singleFeed.description,
                title: response.data.singleFeed.title,
                id: response.data.singleFeed._id,
            });

        })
    }

    handledelete(id, index) {
        axios.delete("http://localhost:3000/deleteblog/" + id).then((res) => {
            this.state.post.splice();
            window.location.reload();
        })
    }

    UpdateData = () => {
        // alert(this.state.id)
        const data = {
            title: this.state.title,
            description: this.state.description
        }
        console.log(this.state.singleFeed.text);
        axios.put("http://localhost:3000/blogupdate/" + this.state.id, data).then(
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
        //post design foreach loop
        const photoblog = this.state.post.map((post) => {
            return (
                <div className="comment-body">
                    <div className='row post'>
                        <div className="col-md-12 color-white  commentname2">
                            <img src={"http://localhost:3000/image/" + post.user_id.image} style={{ marginTop: 15 }} className="img-circle" height="45px" width="45px" />
                            <a href="#" ><strong>{post.user_id.firstname + " " + post.user_id.lastname}</strong> </a>

                            <div className="postbtns">
                                <div className="pull-left">
                                    <i className="fa fa-pencil" data-toggle="modal" onClick={() => this.updateFeed(post._id)} data-target="#myModal"></i>
                                    <div id="myModal" class="modal fade" role="dialog">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <form >
                                                        <div className="form-group">
                                                            <input className="form-control" type="text" name='title' placeholder="Blog Title" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />

                                                        </div>
                                                        <div className="form-group">
                                                            <textarea className="form-control" type="text" name='description' placeholder="Description" value={this.state.description} onChange={(event) => this.setState({ description: event.target.value })} /><br />

                                                        </div>
                                                    </form>
                                                    <div className="btn-footer">
                                                        <button type="button" className="btn btn-primary" onClick={this.UpdateData}>Update</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pull-right">
                                    <i className="fa fa-trash" onClick={() => this.handledelete(post._id)} ></i>
                                </div>
                            </div>


                        </div>

                        <div className=" commentname3">
                            <p><strong>{post.title}</strong></p>
                            <p>{post.description}</p>
                        </div>


                    </div>
                </div >
            )
        })
        return (
            <div>

                <div className="content-wrapper1">


                    <section id="candidates" className="content-header">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-9 bg-white padding-2">
                                    <form action="#" method="post" enctype="multipart/form-data" className="p-5 bg-white">
                                        <div>
                                            <div className="title-post">

                                                <h3 className="mb-3 color-blue"><b>My Posts</b></h3>
                                            </div>
                                            <div className="container-form">
                                                {photoblog}
                                            </div>
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
export default Mypostpage