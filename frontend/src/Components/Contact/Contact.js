import React from 'react';

import "./Contact.css";

import { Form, Col } from "react-bootstrap";


const Contact = () =>{
    return (
        <div className="content contact-page">
            <div className="container">
                <div className="row align-items-stretch no-gutters contact-wrap">
                    <div className="col-md-8">
                        <div className="form h-100">
                            <h3>Send us a message</h3>
                            <Form className="mb-5" method="post" id="contactForm" name="contactForm">
                                <Form.Row >
                                    <Col sm={7} className="form-group mb-5">
                                        <Form.Label htmlFor="inlineFormInputName" className="col-form-label">
                                            Name *
                                        </Form.Label>
                                        <Form.Control id="inlineFormInputName" placeholder="Your name" />
                                    </Col>
                                    <Col sm={7} className="form-group mb-5">
                                        <Form.Label htmlFor="email" className="col-form-label">
                                            Email *
                                        </Form.Label>
                                        <Form.Control type="email" placeholder="Your email" />
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col sm={7} className="form-group mb-5">
                                        <Form.Label htmlFor="inlineFormInputPhone" className="col-form-label">
                                            Phone
                                        </Form.Label>
                                        <Form.Control id="inlineFormInputPhone" placeholder="Phone #" />
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col sm={12} className="my-1 form-group mb-5">
                                        <Form.Label htmlFor="message" className="col-form-label">Message *</Form.Label>
                                        <Form.Control as="textarea" className="textarea-height" id="message" rows={3} cols={45} placeholder="Write your message"/>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col sm={12} className=" form-group">
                                        <input type="submit" className="btn btn-primary rounded-0 py-2 px-4"></input>
                                    </Col>
                                </Form.Row>
                            </Form>
                            <div id="form-message-warning mt-4"></div> 
                            <div id="form-message-success">
                            Your message was sent, thank you!
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contact-info h-100">
                            <h3>Contact Information</h3>
                            <p className="mb-5"></p>
                            <ul className="list-unstyled">
                                <li className="d-flex">
                                    <span className="wrap-icon icon-room mr-3"></span>
                                    <span className="text"> IT Academy STEP, 16 Soborna Street, Rivne, Rivne region, 33000 </span>
                                </li>
                                <li className="d-flex">
                                    <span className="wrap-icon icon-phone mr-3"></span>
                                    <span className="text">+1 (291) 939 9321</span>
                                </li>
                                <li className="d-flex">
                                    <span className="wrap-icon icon-envelope mr-3"></span>
                                    <span className="text">info@mywebsite.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;