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
            post_id: this.props.post._id,
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

    componentDidMount() {
        axios.get('http://localhost:3000/logincheck', this.state.config)
            .then((response) => {
                this.setState({
                    user: response.data,
                    id: response.data._id
                })

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
                        <a href="" className="post-title" ><strong>{this.props.post.user_id.firstname + " " + this.props.post.user_id.lastname}</strong></a>
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