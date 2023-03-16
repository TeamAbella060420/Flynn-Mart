import React from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import '../styles/cart.css';
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {

    const cartItems = useSelector(state => state.cart.cartItems)
    const totalAmount = useSelector(state => state.cart.totalAmount)
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
                                            <Tr item={item}/>
                                        ))
                                    }
                                </tbody>
                            </table>
                            }
                        </Col>

                        <Col lg='3'>
                            <div>
                                <h6 className="d-flex align-items-center
                                 justify-content-between">Subtotal</h6>
                                <span>$ {totalAmount}</span>
                                <p>Taxes and shipping fee will be calculated in checkout.</p>
                            </div>
                            <div>
                                <button className="buy__btn"><Link to='/shop'>Continue Shopping</Link></button>
                            </div>
                            <div>
                                <button className="buy__btn"><Link to='/checkout'>Checkout</Link></button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Helmet>
        </>
    );
};

const Tr = ({item, index}) => {

    const dispatch = useDispatch();

    const deleteProduct = () => {
        dispatch(cartActions.deleteItem(item.id))
    }
    return (
        <tr key={index}>
            <td><img src={item.imgUrl} alt="" /></td>
            <td>{item.productName}</td>
            <td>${item.price}</td>
            <td>{item.quantity} pc </td>
            <td>
                <motion.i
                    whileTap={{scale: 1.2}}
                    class="ri-delete-bin-6-line"
                    onClick={deleteProduct}
                ></motion.i>
            </td>
        </tr>
    )
}

export default Cart;