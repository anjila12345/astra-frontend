import React from 'react'
import axios from 'axios'



class jobpost extends React.Component {
    constructor() {
        super();
        this.state = {
            id: "",
            description: "",

            title: "",
            success: "",
            error: "",
            config: {
                headers: {
                    'content-type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/agent/logincheck', this.state.config)
            .then((response) => {
                this.setState({
                    user: response.data,
                    id: response.data._id
                })

            })
    }

    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }


    postdata = (e) => {
        e.preventDefault();

        let postdata = new FormData();
        postdata.append('user_id', this.state.id);
        postdata.append('description', this.state.description);
        postdata.append('title', this.state.title);
        axios.post('http://localhost:3000/createpost', postdata, this.state.config)
            .then(response => {
                console.log(response.data.successmsg)
                // window.location.reload();
                this.setState({
                    success: response.data.successmsg
                });
                setTimeout(function () {
                    window.location.reload()
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

        return (
            <div>

                <div className="content-wrapper1" >

                    <section id="candidates" className="content-header">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-9 bg-white padding-2">

                                    <form>
                                        <div className="box box-primary">
                                            <div className="box-header with-border">
                                                <h3 className="box-title">Post Job</h3>
                                            </div>

                                            <div className="box-body">



                                                <div className="form-group">
                                                    <input className="form-control" id="title" ref="text"
                                                        name="title" placeholder="Job title" value={this.state.title} onChange={this.handleChange} />
                                                </div>


                                                <div className="form-group">
                                                    <textarea className="form-control" ref="description"
                                                        name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange}></textarea>
                                                </div>



                                            </div>
                                            <div className="box-footer">
                                                <div className="postdata">
                                                    <button type="submit" onClick={this.postdata} className="btn btn-primary" id="insert">Submit</button>
                                                </div>
                                                <a href="#" className="btn btn-primary" id="clear">Clear</a>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>



                </div>

            </div>

        )
    }


}
export default jobpost