import React from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import '../styles/cart.css';
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {

    const cartItems = useSelector(state => state.cart.cartItems)

    return (
        <>
            <Helmet title='Cart'>
                <CommonSection title='Shopping Cart'/>
                <Container>
                    <Row>
                        <Col lg='9'>
                            {
                                cartItems.length === 0 ? <h2 className="fs-4 text-center">No item added to the cart.</h2> :
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
                                    {
                                        cartItems.map((item,index) => (
                                            <tr key={index}>
                                            <td><img src={item.imgUrl} alt="" /></td>
                                            <td>{item.productName}</td>
                                            <td>${item.price}</td>
                                            <td>{item.quantity} pc </td>
                                            <td><motion.i
                                             whileTap={{scale: 1.2}}
                                             class="ri-delete-bin-6-line"></motion.i></td>
                                        </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            }
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

const Tr = () => {

}

export default Cart;