import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, ListGroup, ListGroupItem } from "reactstrap";
import './footer.css'


const Footer = () => {

    const year= new Date().getFullYear()
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='4' className="mb-4" md='6'>
                        <div className="logo">
                                <div>
                                    <h1 className="text-white">FlyNNMart</h1>
                                </div>
                        </div>
                            <p className="footer__text mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perferendis repellat assumenda delectus aspernatur natus possimus mollitia ex officiis totam!
                            </p>
                    </Col>
                    <Col lg='3' className="mb-4" md='3'>
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
                    <Col lg='2' md='3' className="mb-4">
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Useful Links</h4>
                            <ListGroup className="mb-3">
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='/shop'>Shop</Link>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='/Cart'>Cart</Link>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='/login'>Login</Link>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to='#'>Privacy Policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='3' md='4'>
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Contact</h4>
                            <ListGroup className="footer__contact">
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span><i class="ri-map-pin-line"></i></span>
                                    <p>123 Paranaque City</p>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup className="footer__contact">
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span><i class="ri-phone-line"></i></span>
                                    <p>+63 927 263 2517</p>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup className="footer__contact">
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span><i class="ri-mail-line"></i></span>
                                    <p>teamabella@outlook.com</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='12'>
                        <p className="footer__copyright">
                            Copyright {year} developed by Engr. Jezreel Abella. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;