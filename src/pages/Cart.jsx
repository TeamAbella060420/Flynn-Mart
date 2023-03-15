import React from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import '../styles/cart.css';
import tdImg from '../assets/images/arm-chair-01.jpg'

const Cart = () => {
    return (
        <>
            <Helmet title='Cart'>
                <CommonSection title='Shopping Cart'/>
                <Container>
                    <Row>
                        <Col lg='9'>
                        <table className="table bordered">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src={tdImg} alt="" /></td>
                                    <td>Modern Arm Chair</td>
                                    <td>$299</td>
                                    <td>2px </td>
                                    <td><i class="ri-delete-bin-6-line"></i></td>
                                </tr>
                            </tbody>
                        </table>
                        </Col>

                        <Col lg='3'>
                        <table></table>
                        </Col>
                    </Row>
                </Container>
            </Helmet>
        </>
    )
};

export default Cart;