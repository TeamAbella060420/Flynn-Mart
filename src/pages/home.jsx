import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import '../styles/home.css'

import heroImg from '../assets/images/hero-img.png'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Sevices from "../services/Services";

const Home = () => {
    const year = new Date().getFullYear()
    return (
        <Helmet title={'Home'}>
            <section className="hero__section">
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="hero__content">
                                <p className="hero__subtitle"> Trending product in {year}</p>
                                <h2>Make your interior More Minimalistic & Modern.</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In mollitia provident illum est? Voluptatibus delectus ducimus, obcaecati vitae rerum sapiente.</p>
                            </div>
                            <Link to="/shop"><motion.button whileTap={{scale: 1.2}} className="buy__btn">SHOP NOW</motion.button></Link>
                        </Col>

                        <Col lg='6' md='6'>
                            <div className="hero__img">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Sevices />

            <section className="trending__products">
                <Container>
                    <Row>
                        <Col lg='12'>
                            <h2 className="section__title">Trending Products</h2>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
};

export default Home;