import React from 'react'
import Mypostpage from '../../component/Agent/mypost';
import Header from '../../component/Agent/header';
import Footer from '../../component/footer';

class Mypost extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Mypostpage />
                <Footer />
            </div>

        )
    }


}
export default Mypost