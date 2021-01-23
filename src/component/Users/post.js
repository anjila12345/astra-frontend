import React, { Component } from 'react';
import axios from 'axios';


class Post extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
        this.state = {
            all_comments: [],
            comment: "",
            id: this.props.post.user_id._id,
            post_id: this.props.post_id,
            favourite: this.props.post.favourite,
            user:{},
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }

        console.log(this.props.post)
    }

    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }
    postcomment = (e) => {
        e.preventDefault();
        const data = {
            user_id: this.state.id,
            comment: this.state.comment,
            post_id: this.state.post_id
        }
        axios.post('http://localhost:3000/postcomment', data, this.state.config)
            .then(response => {
                console.log(response.data.successmsg)
                // window.location.reload();
                this.setState({
                    success: response.data.successmsg
                });
                setTimeout(function () {
                    window.location.reload()
                    alert("Successfully updated");
                }, 1000);
            })
            .catch(error => {
                this.setState({
                    error: "Something went wrong. Try again!"
                })
                console.log(error.response.data.errmsg)
            })
    }
    componentDidMount() {
        axios.get('http://localhost:3000/logincheck', this.state.config)
            .then((response) => {
                this.setState({
                    user: response.data,
                    id: response.data._id
                })

            })
        axios.get('http://localhost:3000/getcommentbypostid/' + this.props.post._id, this.state.config)
            .then(res => {
                console.log(res.data)
                // console.log(this.props.post.favourite)
                this.setState({
                    all_comments: res.data,
                });
            })
    }
    addtowishlist = (e) => {
        e.preventDefault();
        const data = {
            user_id: this.state.id,
            post_id: this.props.post._id
        }
        axios.put(`http://localhost:3000/addToWishlist`, data, this.state.config)
            .then(response => {
                console.log(this.state.post_id)
                console.log(response.data)
                alert("successful")
                setTimeout(function () {
                    window.location.reload()
                    alert("Successfully updated");
                }, 1000);
            })
            .catch(error => {
                this.setState({
                    error: "Something went wrong. Try again!"
                })
                console.log(error.response.data.errmsg)
            })
    }

    AddTofaviourite = (e) => {
        e.preventDefault();
        const data = {
            post_id: this.props.post._id,
            user_id: this.state.id
        }
        axios.put('http://localhost:3000/addToFavourite', data, this.state.config)
        .then(res =>{
            // console.log(this.props.post._id)
            // console.log(this.state.id)
            // console.log(res.data)
            // alert('the post has been liked')
            setTimeout(function () {
                window.location.reload()
                // alert("Successfully updated");
            }, 1000);
        })
        .catch((err) => {
            console.log(err);
        }) 
    }

    DeleteTofaviourite = (e) => {
        e.preventDefault();
        const data = {
            post_id: this.props.post._id,
            user_id: this.state.id
        }
        axios.put('http://localhost:3000/deleteFromFavourite', data, this.state.config)
        .then(res =>{
            // console.log(this.props.post_id)
            // alert('the post has been unliked')
            setTimeout(function () {
                window.location.reload()
                // alert("Successfully updated");
            }, 1000);
        })
        .catch((err) => {
            console.log(err);
        }) 
    }

    render() {

        const commentbox = this.state.all_comments.map((post) => {
            return (
                <div className="comment-box">
                    <div className="col-md-12 color-white commentname">
                        <img src={"http://localhost:3000/image/" + this.props.post.user_id.image} style={{ marginTop: 20 }} className="img-circle" height="30px" width="30px" />
                        <div className="comment-text">
                            <a href="" ><strong >{this.props.post.user_id.firstname + " " + this.props.post.user_id.lastname}</strong></a>
                            <p>{post.comment}<br />
                                <div className="comment-date"> {(new Date(this.props.post.date)).toDateString()}  |
                              <i className="fa fa-trash" onClick={() => this.handledelete(post._id)} ></i></div>
                            </p>
                        </div>
                    </div>
                </div>
            )

        })

        return (

            <div className="comment-body">
                <div className="row post">
                    <div className="col-md-12 color-white commentname2">
                        <img src={"http://localhost:3000/image/" + this.props.post.user_id.image} style={{ marginTop: 15 }} className="img-circle" height="40px" width="40px" />
                        <a className="post-title" ><strong>{this.props.post.user_id.firstname + " " + this.props.post.user_id.lastname}</strong></a>
                        <div className="btnsapply">
                            <button type="button" className="btn-primary" style={{ marginTop: 15 }} onClick={this.addtowishlist}>Apply</button>
                        {this.props.post.favourite.includes(this.state.id)
                        ?<button type="button" className="btn-comment" style={{ marginTop: 15 }} onClick={this.DeleteTofaviourite}><strong>  <i className="fa fa-star fa-2x" style={{color:"#C8D80D"}} ></i></strong></button>
                        :<button type="button" className="btn-comment" style={{ marginTop: 15 }} onClick={this.AddTofaviourite}><strong>  <i className="fa fa-star-o fa-2x" style={{color:"#C8D80D"}}></i></strong></button>
                        }
                        </div>

                        <br />

                    </div>
                    <div className=" commentname3">
                        <p><strong>{this.props.post.title}</strong></p>
                        <p>{this.props.post.description}</p>
                    </div>
                    <div className="col-md-12 inputcomment">
                        <input id="textbox1" type="text" placeholder="Add comment..." name="comment" onChange={this.handleChange} />
                        <button type="button" className="btn-comment" style={{ marginTop: 15 }} onClick={this.postcomment}><strong>Post</strong></button>
                    </div>
                    {commentbox}
                </div>


            </div>


        )
    }
}
export default Post;