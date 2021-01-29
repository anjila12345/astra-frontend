import React, { Component } from 'react'
import Applicants from '../../component/Agent/applicants';
import Header from '../../component/Agent/header';
import Footer from '../../component/footer2';

export default class applicant extends Component {
    render() {
        return (
            <div>
                <Header />
                <Applicants />
                <Footer />
            </div>
        )
    }
}
