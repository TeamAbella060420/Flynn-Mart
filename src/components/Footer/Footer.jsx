import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, ListGroup, ListGroupItem } from "reactstrap";
import logo from '../../assets/images/eco-logo.png'
import './footer.css'


const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='4'>
                        <div className="logo">
                            <img src={logo} alt="logo" />
                                <div>
                                    <h1>FlyNNMart</h1>
                                </div>
                        </div>
                            <p className="footer__text mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perferendis repellat assumenda delectus aspernatur natus possimus mollitia ex officiis totam!
                            </p>
                    </Col>
                    <Col lg='3'>
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Top Categories</h4>
                            <ListGroup className="mb-3">
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='#'>Mobile Phones</Link>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='#'>Modern Sofa</Link>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup>
                                <ListGroupItem className="ps-0 border-0">     
                                    <Link to='#'>Arm Chair</Link>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='#'>Smart Watches</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='2'>

                    </Col>
                    <Col lg='1'>

                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;