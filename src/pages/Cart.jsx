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
                        <Col lg='9' className="mt-5">
                            {
                                cartItems.length === 0 ? <h2 className="fs-4 text-center">No item added to the cart.</h2> :
                                <table className="table bordered">
                                <thead>
                                    <tr>
                                        <th className="text-center">Image</th>
                                        <th>Title</th>
                                        <th className="text-center">Price</th>
                                        <th className="text-center">Qty</th>
                                        <th className="text-center">Delete</th>
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

                        <Col lg='3' className="mt-5 mb-5">
                            <div>
                                <h6 className="d-flex align-items-center
                                 justify-content-between">Subtotal
                                <span className="fs-4 fw-bold">$ {totalAmount}</span>
                                 </h6>
                                <p className="fs-6 mt-2">Taxes and shipping fee will be calculated in checkout.</p>
                            </div>
                            <div>
                                <button className="buy__btn w-100"><Link to='/checkout'>Checkout</Link></button>
                            </div>
                            <div>
                                <button className="buy__btn w-100"><Link to='/shop'>Continue Shopping</Link></button>
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
            <td className="text-center"><img src={item.imgUrl} alt="" /></td>
            <td>{item.productName}</td>
            <td className="text-center">${item.price}</td>
            <td className="text-center">{item.quantity} pc </td>
            <td className="text-center">
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