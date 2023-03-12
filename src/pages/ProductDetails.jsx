import { motion } from "framer-motion";
import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import '../styles/product-details.css'

const ProductDetails = () => {
    console.log(products, 'sss');
    const { id } = useParams();
    const myproduct = products.find((item) => item.id === id);

    const {
        imgUrl,
        productName,
        price,
        avgRating,
        shortDesc,
        reviews,
        description
    } = myproduct;

    return (
        <>
         <Helmet title={productName}>
             <CommonSection title={productName}/>
             <section className="pt-0">
                 <Container>
                     <Row>
                     <Col lg='6'>
                             <img src={imgUrl} alt="" />
                         </Col>
                         <Col lg='6'>
                             <div className="product__details">
                                 <h2>
                                     {productName}
                                 </h2>
                                 <div className="product__rating d-flex align-items-center gap-5 mb-3">
                                     <div>
                                         <span>
                                            <i className="ri-star-s-fill"></i>
                                        </span>
                                         <span>
                                            <i className="ri-star-s-fill"></i>
                                        </span>
                                         <span>
                                            <i className="ri-star-s-fill"></i>
                                        </span>
                                         <span>
                                            <i className="ri-star-s-fill"></i>
                                        </span>
                                         <span>
                                            <i className="ri-star-half-s-line"></i>
                                        </span>
                                     </div>
                                         <p>(<span>{avgRating}</span> ratings)</p>
                                 </div>

                                     <span className="product__price">${price}</span>
                                     <p className="mt-3">{shortDesc}</p>

                                     <motion.button whileTap={{ scale: 1.1 }} className="buy__btn">Add to Cart</motion.button>
                             </div>
                         </Col>
                     </Row>
                 </Container>
             </section>

             <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className="tab__wrapper d-flex align-items-center gap-5">
                                <h6>Description</h6>
                                <h6>Reviews ({reviews.length})</h6>
                            </div>

                            <div className="tab__content">
                                <p>{description}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
             </section>
         </Helmet>
        </>
    )
};

export default ProductDetails;