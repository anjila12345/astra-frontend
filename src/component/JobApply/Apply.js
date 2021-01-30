import React from 'react'
import axios from 'axios'



class Apply extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            citizenshipnumber: "",
            post: props.postid,
            email: "",
            phone: "",
            cv: "",
            success: "",
            error: "",
            data: this.props.data,
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
        console.log(this.props.post);
    }


    // postdata = (e) => {
    //     e.preventDefault();

    //     let postdata = new FormData();
    //     postdata.append('user_id', this.state.id);
    //     postdata.append('description', this.state.description);
    //     postdata.append('title', this.state.title);
    //     axios.post('http://localhost:3000/createpost', postdata, this.state.config)
    //         .then(response => {
    //             console.log(response.data.successmsg)
    //             // window.location.reload();
    //             this.setState({
    //                 success: response.data.successmsg
    //             });
    //             setTimeout(function () {
    //                 window.location.reload()
    //             }, 1000);
    //         })
    //         .catch(error => {
    //             this.setState({
    //                 error: "Something went wrong. Try again!"
    //             })
    //             console.log(error.response.data.errmsg)
    //         })
    // }




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
                                                <h3 className="box-title">Apply for Job</h3>
                                            </div>

                                            <div className="box-body">



                                                <div className="form-group">
                                                    <input className="form-control" id="title" ref="text"
                                                        name="Citizen-ship Number" placeholder="CitizenShip Number" value={this.state.citizenshipnumber} onChange={this.handleChange} />
                                                </div>


                                                <div className="form-group">
                                                    <textarea className="form-control" ref="description"
                                                        name="phone" placeholder="Phone" id="desc" value={this.state.phone} onChange={this.handleChange}></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <textarea className="form-control" ref="description"
                                                        name="email" placeholder="Email" id="email" value={this.state.email} onChange={this.handleChange}></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <input type="file" onChange={this.onFileChange}/>
                                                </div>



                                            </div>
                                            <div className="box-footer">
                                                <div className="postdata">
                                                    <button type="submit" id="submitt" onClick={this.postdata} className="btn btn-primary" >Submit</button>
                                                </div>
                                                {/* {this.fileData()} */}
                                                <a href="#" id="clear" className="btn btn-primary"> Clear</a>
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
export default Apply