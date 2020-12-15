import React from 'react'
import Editprofilepage from '../../component/Users/editprofile';
import Header from '../../component/Users/header';
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