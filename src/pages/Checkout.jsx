import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'

const Checkout = () => {
    return (
        <Helmet title='Checkout'>
            <CommonSection />
            <section>
                <Container>
                    <Row>
                        <Col lg='8'>
                            <h6 className="mb-4 fw-bold">Billing Information</h6>
                            <Form>
                                <FormGroup className="form__group"></FormGroup>
                            </Form>
                        </Col>
                        <Col lg='4'>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
};

export default Checkout;