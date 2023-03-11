import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

const ProductDetails = () => {
    console.log(products, 'sss');
    const { id } = useParams();
    const myproduct = products.find((item) => item.id === id);

    const {
        imgUrl,
        productName,
        price,
        avgRating,
        shortDesc
    } = myproduct;

    return (
        <>
         <Helmet>
             <CommonSection />
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
                                 <div className="product__rating">
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
                                         <p>({avgRating} ratings)</p>
                                     </div>

                                     <span>{price}</span>
                                     <p>{shortDesc}</p>

                                     <button className="buy__btn">Add to Cart</button>

                                 </div>
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