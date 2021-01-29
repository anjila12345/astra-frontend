import axios from 'axios'
import React from 'react'
import AdminNavi from './AdminNavi'
import Postdetailss from './postdetails'

class PostDetail extends React.Component {

    render() {
        const photoblog = this.props.post.map(post => {
            return <Postdetailss post={post} />
        })
        return (
            <div>

                <AdminNavi />
                <div className="content-wrapper1" style={{ marginleft: "0 px" }}>

                    <section id="candidates" className="content-header">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-9 bg-white padding-2">

                                    <table id="example2" className="table">
                                        <thead id="thead">

                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Title</th>
                                            <th>Discription</th>
                                            <th>Experience</th>
                                            <th>Education</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </thead>
                                        {photoblog}
                                    </table>
                                </div>

                            </div>
                        </div>
                    </section>

                </div>
            </div>

        )
    }


}
export default PostDetail