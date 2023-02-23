import React from "react";
import { Container, Row, Col } from "reactstrap";

import './services.css'
import servicesData from '../assets/data/serviceData'
import { motion } from "framer-motion";

const Sevices = () => {
    return (
    <section className="services">
        <Container>
            <Row>
                {
                    servicesData.map((item, index) => {
                        return (
                            <Col lg="3" md='4' key={index}>
                            <motion.div 
                                whileHover={{scale: 1.1}} 
                                className="services__item" 
                                style={{background: `${item.bg}`}}
                            >
                                <span><i class={item.icon}></i></span>
                                <div>
                                    <span>
                                        <h3>{item.title}</h3>
                                        <p>{item.subtitle}</p>
                                    </span>
                                </div>
                            </motion.div>
                        </Col>
                        )
                    })
                }
            </Row>
        </Container>
    </section>
    )
};

export default Sevices;