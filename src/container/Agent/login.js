import React from 'react'
import Loginpage from '../../component/Agent/login';
import Header from '../../component/header';
import Footer from '../../component/footer';




class Login extends React.Component {

    render() {

        return (
            <div>
                <Header />
                <Loginpage />
                <Footer />

            </div>

        )
    }


}
export default Login
