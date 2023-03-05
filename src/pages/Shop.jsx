import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from '../components/Helmet/Helmet'
import { Container,Row, Col } from "reactstrap";

const Shop = () => {
    return (
        <Helmet title='Shop'>
            <CommonSection title='Products'/>

            <section>
                <Container>
                        <Row>
                        <Col lg='3' md='4'>
                        </Col>
                        </Row>
                </Container>
            </section>
        </Helmet>
    )
};

export default Shop;