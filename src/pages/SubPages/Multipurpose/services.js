import React, { Component } from 'react';

class Services extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section" id="services">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="title text-center mb-5">
                                    <p className="text-uppercase text-muted mb-2 f-13 subtitle">NEWS</p>
                                    <h3>ADMISSION REQUIREMENTS</h3>
                                    {/* <p className="text-muted mt-3">FOR INCOMING SENIOR HIGH SCHOOL STUDENTS</p> */}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="services-box p-4">
                                    <div className="services-icon mb-3">
                                        <i className="pe-7s-monitor text-custom h1"></i>
                                    </div>
                                    <div className="services-desc">
                                        <h5 className="mb-3 f-18">FOR INCOMING SENIOR HIGH SCHOOL STUDENTS:</h5>
                                        <p className="text-muted">
                                            <ul>
                                            <li>Form 138 (report card)</li>
                                            <li>Certificate of Completion (G10)</li>
                                            <li>PSA Birth Certificate (original)</li>
                                            <li>2 pcs. 1x1 colored picture</li>
                                            <li>2 pcs. 2x2 picture with white background</li>
                                            <li>Medical Certificate</li>
                                            <li>1 long brown envelop</li>
                                            <li>1 long plastic envelop (transparent)</li>
                                            <li>Barangay Clearance</li>
                                            <li>Certificate of Good Moral Character</li>
                                            <li>Diploma</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="services-box p-4">
                                    <div className="services-icon mb-3">
                                        <i className="pe-7s-notebook text-custom h1"></i>
                                    </div>
                                    <div className="services-desc">
                                        <h5 className="mb-3 f-18">FOR INCOMING COLLEGE STUDENTS</h5>
                                        <p className="text-muted">Interview / Entrance Test Result
                                            <ul>
                                            <li>Form 137</li>
                                            <li>High School Report Card (Form 138)</li>
                                            <li>Certificate of Good Moral Character</li>
                                            <li>PSA Birth Certificate (photocopy)</li>
                                            <li>Medical Certificate</li>
                                            <li>Barangay Clearance</li>
                                            <li>5 pcs. 1x1 colored ID picture</li>
                                            <li>4 pcs. 2x2 colored ID pictures</li>
                                            <li>Long Folder (hard paper)</li>
                                            <li>Long Plastic Envelope</li>
                                            <li>long Brown Envelop</li>
                                            <li>Marriage Contract - if married</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-4">
                                <div className="services-box p-4">
                                    <div className="services-icon mb-3">
                                        <i className="pe-7s-exapnd2 text-custom h1"></i>
                                    </div>
                                    <div className="services-desc">
                                        <h5 className="mb-3 f-18">Strategy Solutions</h5>
                                        <p className="text-muted">He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        {/* <div className="row">
                            <div className="col-lg-4">
                                <div className="services-box p-4">
                                    <div className="services-icon mb-3">
                                        <i className="pe-7s-repeat text-custom h1"></i>
                                    </div>
                                    <div className="services-desc">
                                        <h5 className="mb-3 f-18">Awesome Support</h5>
                                        <p className="text-muted">The wonderful serenity has taken of my these sweet mornings of spring which enjoy with my whole heart.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="services-box p-4">
                                    <div className="services-icon mb-3">
                                        <i className="pe-7s-albums text-custom h1"></i>
                                    </div>
                                    <div className="services-desc">
                                        <h5 className="mb-3 f-18">Truly Multipurpose</h5>
                                        <p className="text-muted">It showed a lady fitted out with a fur hat and boa who sat upright a heavy fur muff that covered the whole.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="services-box p-4">
                                    <div className="services-icon mb-3">
                                        <i className="pe-7s-upload text-custom h1"></i>
                                    </div>
                                    <div className="services-desc">
                                        <h5 className="mb-3 f-18">Easy to customize</h5>
                                        <p className="text-muted">The languages only differ in their grammar, their and their most common why a new common language</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default Services;


