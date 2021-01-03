import React from 'react'
import Editprofilepage from '../../component/Agent/editprofile';
import Header from '../../component/Agent/header';
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