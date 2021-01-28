import React, { Component } from 'react';
import axios from 'axios';
// import moment from 'moment';
import date from 'date-and-time';
const now = new Date();



class Post extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
        this.state = {
            all_comments: [],
            comment: "",
            citizenshipnumber: "",

            address: "",
            phone: "",
            university: "",
            studylevel: "",
            year: "",
            workplace: "",
            descp: "",
            start: "",
            end: "",


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
    handledelete(id, index) {
        axios.delete("http://localhost:3000/deletecomment/" + id).then((res) => {
            this.state.all_comments.splice();
            window.location.reload();
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
            .then(res => {
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
            .then(res => {
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

    apply = (e) => {
        e.preventDefault();
        const data = {
            user_id: this.state.id,
            user_id: this.state.id,
            citizenshipnumber: this.state.citizenshipnumber,
            phone: this.state.phone,
            address: this.state.address,
            university: this.state.university,
            year: this.state.year,
            studylevel: this.state.studylevel,
            workplace: this.state.workplace,
            descp: this.state.descp,
            start: this.state.start,
            end: this.state.end,

            post_id: this.state.post_id
        }
        axios.post('http://localhost:3000/postapplication', data, this.state.config)
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



    render() {

        const commentbox = this.state.all_comments.map((post) => {
            return (
                <div className="comment-box">
                    <div className="col-md-12 color-white commentname">
                        <img src={"http://localhost:3000/image/" + this.props.post.user_id.image} style={{ marginTop: 20 }} className="img-circle" height="30px" width="30px" />
                        <div className="comment-text">
                            <a href="" ><strong >{this.props.post.user_id.firstname + " " + this.props.post.user_id.lastname}</strong></a>
                            <p>{post.comment}<br />
                                <div className="comment-date"> {date.format(now, 'YYYY/MM/DD')}  |
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
                        <div className="post-date"> {date.format(now, 'YYYY/MM/DD')}  </div>
                        <div className="btnsapply">
                            <button type="button" className="btn-primary apply" style={{ marginTop: 15 }} onClick={() => this.apply} data-target="#myModal" data-toggle="modal">Apply</button>
                            <div id="myModal" class="modal fade" role="dialog">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <form>
                                                <div className="box box-primary">
                                                    <div className="box-header with-border">
                                                        <h3 className="box-title">Apply for Job</h3>
                                                    </div>

                                                    <div className="box-body">
                                                        <div class="row">
                                                            <div className="col-xs-6 form-group">
                                                                <input className="form-control " id="citizenshipnumber" type="text"
                                                                    name="citizenshipnumber" placeholder="CitizenShip Number" value={this.state.citizenshipnumber} onChange={this.handleChange} />
                                                            </div>

                                                            <div className="col-xs-6 form-group">
                                                                <input className="form-control" id="phone" type="text"
                                                                    name="phone" placeholder="Phone" value={this.state.phone} onChange={this.handleChange} />
                                                            </div>

                                                        </div>

                                                        <div className="form-group">
                                                            <input className="form-control" id="address" type="text"
                                                                name="address" placeholder=" Temporary Address" value={this.state.address} onChange={this.handleChange} />
                                                        </div>
                                                        <div class="education">
                                                            <h5>EDUCATION</h5>
                                                            <div className="form-group">
                                                                <input className="form-control" id="university" type="text"
                                                                    name="university" placeholder="University" value={this.state.university} onChange={this.handleChange} />
                                                            </div>

                                                            <div className="form-group">
                                                                <input className="form-control" id="studylevel" type="text"
                                                                    name="studylevel" placeholder="Study Level" value={this.state.studylevel} onChange={this.handleChange} />
                                                            </div>
                                                            <div className="form-group">
                                                                <label id="label">Finished Year</label>
                                                                <input className="form-control" id="year" type="date"
                                                                    name="year" placeholder="Year" value={this.state.year} onChange={this.handleChange} />
                                                            </div>
                                                        </div>
                                                        <div class="education">
                                                            <h5>Experience</h5>
                                                            <div className="form-group">
                                                                <input className="form-control" id="workplace" type="text"
                                                                    name="workplace" placeholder="Work Place" value={this.state.workplace} onChange={this.handleChange} />
                                                            </div>
                                                            <div className="form-group">
                                                                <textarea className="form-control" id="descp" type="text"
                                                                    name="descp" placeholder="Description" value={this.state.descp} onChange={this.handleChange} />
                                                            </div>
                                                            <div class="row">
                                                                <div className="col-xs-6 form-group">
                                                                    <label id="label">From</label>
                                                                    <input className="form-control " id="start" type="date"
                                                                        name="start" placeholder="Year" value={this.state.start} onChange={this.handleChange} />
                                                                </div>

                                                                <div className="col-xs-6 form-group">
                                                                    <label id="label">To</label>
                                                                    <input className="form-control" id="end" type="date"
                                                                        name="end" placeholder="Year" value={this.state.end} onChange={this.handleChange} />
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="box-footer">
                                                        <div className="postdata">
                                                            <button type="submit" onClick={this.apply} className="btn btn-primary" >Send</button>
                                                        </div>

                                                    </div>

                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <button type="button" className="btn-primary apply" style={{ marginTop: 15 }} onClick={this.addtowishlist}>Wishlist</button>
                        </div>

                        <br />

                    </div>
                    <div className=" commentname3">
                        <p><strong>{this.props.post.title}</strong></p>
                        <p>{this.props.post.description}</p>
                    </div>

                    <div className="row">
                        {this.props.post.favourite.length == 0
                            ? <h3></h3>
                            : <h3>{this.props.post.favourite.length}</h3>}
                        <div className=" rating">
                            {this.props.post.favourite.includes(this.state.id)
                                ? <button type="button" className="btn-comment" style={{ marginTop: 15 }} onClick={this.DeleteTofaviourite}><strong>  <i className="fa fa-star fa-2x" style={{ color: "#C8D80D" }} ></i></strong></button>
                                : <button type="button" className="btn-comment" style={{ marginTop: 15 }} onClick={this.AddTofaviourite}><strong>  <i className="fa fa-star-o fa-2x" style={{ color: "#C8D80D" }}></i></strong></button>
                            }
                        </div>
                        <div className=" inputcomment">
                            <input id="textbox1" type="text" placeholder="Add comment..." name="comment" onChange={this.handleChange} />
                            <button type="button" className="btn-comment" style={{ marginTop: 15 }} onClick={this.postcomment}><strong>Post</strong></button>
                        </div>
                    </div>
                    {commentbox}
                </div>


            </div>


        )
    }
}
export default Post;