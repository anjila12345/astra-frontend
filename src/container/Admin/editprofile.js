import React from 'react'
import Editprofilepage from '../../component/Admin/editprofile';
import Header from '../../component/Admin/header';
import Footer from '../../component/footer';





class Editprofile extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Editprofilepage />
                <Footer />

            </div>

        )
    }


}
export default Editprofile