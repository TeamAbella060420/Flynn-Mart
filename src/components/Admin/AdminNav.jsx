import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../Header/Header';

const AdminNav = () => {
  return (
    <Header className='admin__header'>
        <div className="admin__nav-top">
            <Container>
                <div className='admin__nav-wrapper-top'>
                    <div className="logo">
                        <h2>FlyNNMart</h2>
                    </div>

                    <div className="search__box">
                        <input type="text" placeholder='Search....'/>
                        <span></span>
                    </div>
                </div >
            </Container>
        </div>
    </Header>
  )
}

export default AdminNav