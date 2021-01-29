import React, { Component } from 'react';
import axios from 'axios';

class wishlist extends Component {
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
        axios.get('http://localhost:3000/logincheck', this.state.config)
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
            })
        axios.get('http://localhost:3000/getAllWishlist', this.state.id, this.state.config)
            .then((res) => {
                console.log(res.data)
                this.setState({ post: res.data })
            })
    }

    deleteFromWishlist = (postid) => {
        // e.preventDefault();
        const data = {
            user_id: this.state.id,
            post_id: postid
        }
        axios.put(`http://localhost:3000/deleteFromWishlist`, data, this.state.config)
            .then(response => {
                console.log(postid)
                console.log(response.data)
                alert("deleted from the wishlist")
                setTimeout(function () {
                    window.location.reload()
                    // alert("Successfully updated");
                }, 1000);
            })
            .catch(error => {
                this.setState({
                    error: "Something went wrong. Try again!"
                })
                console.log(error.response.data.errmsg)
            })
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
                            <div className="btnsapply">
                            <button type="button" className="btn-primary apply" style={{ marginTop: 15 }} onClick={this.addtowishlist}>Apply</button>

                            <button type="button" className="btn-danger apply" style={{ marginTop: 15, backgroundColor:'red' }} onClick={() => this.deleteFromWishlist(post._id)}>Delete</button>
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

                                <div className="col-md-9 bg-white1 padding-2">
                                    <form action="#" method="post" enctype="multipart/form-data" className="p-5 bg-white">
                                        <div>
                                            <div className="title-post">

                                                <h3 className="mb-3 color-blue"><b>My Wishlist</b></h3>
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
export default wishlist;