import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import '../styles/home.css'

import heroImg from '../assets/images/hero-img.png'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from '../assets/data/products'

import Sevices from "../services/Services";
import ProductsList from "../components/UI/ProductsList";

const Home = () => {
    const [trendingProducts, setTrendingProducts] = useState([])
    const [bestSaleProducts, setBestSaleProducts] = useState([])
    
    const year = new Date().getFullYear()
    useEffect(() => {
        const filteredTrendingProducts = products.filter(
            item => item.category === 'chair'
        );

        const filteredBestSalesProducts = products.filter(
            item => item.category === 'sofa'
        );
        setTrendingProducts(filteredTrendingProducts)
        setBestSaleProducts(filteredBestSalesProducts)
    }, []);

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
                        <Col lg='12' className="text-center">
                            <h2 className="section__title">Trending Products</h2>
                        </Col>
                        <ProductsList data={trendingProducts}/>
                    </Row>
                </Container>
            </section>

            <section className="best__sales">
                <Container>
                     <Row>
                        <Col lg='12' className="text-center">
                            <h2 className="section__title">Best Sales</h2>
                        </Col>
                        <ProductsList data={bestSaleProducts}/>
                    </Row>
                </Container>
            </section>

        </Helmet>
    )
};

export default Home;