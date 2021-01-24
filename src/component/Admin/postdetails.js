import axios from 'axios'
import React from 'react'

class PostDetail extends React.Component {
    handledelete(id, index) {
        axios.delete("http://localhost:3000/deleteblog/" + id).then((res) => {
            window.location.reload();
        })
    }


    render() {
        return (

            <tbody>

                <tr>
                    <td>
                        <p>{this.props.post.user_id.firstname}</p>
                    </td>
                    <td>
                        <p>{this.props.post.user_id.lastname}</p>
                    </td>

                    <td>
                        <p>{this.props.post.title}</p>
                    </td>
                    <td> <p>{this.props.post.description}</p></td>
                    <td>
                        <td>
                            <button type="button" className="btn btn-primary" onClick={this.deletepost} onClick={() => this.handledelete(this.props.post._id)}> <i className="fa fa-trash" ></i> Delete </button>
                        </td>  </td>
                </tr>

            </tbody>
        )
    }


}
export default PostDetail