import React from 'react'
import Post from './post'



class Newsfeedpage extends React.Component {

    render() {
        const photoblog = this.props.post.map(post => {
            return <Post post={post} />
        })
        return (
            <div >

                <div className="content-wrapper1">
                    <section id="candidates" className="content-header">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-9 bg-white padding-2">
                                    <form action="#" method="post" enctype="multipart/form-data" className="p-5 bg-white">
                                        <div class="container-form">
                                            {photoblog}
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
export default Newsfeedpage