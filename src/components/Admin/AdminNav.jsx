import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../Header/Header';

import useAuth from '../../custom-hooks/useAuth';

const AdminNav = () => {

    const { currentUser } = useAuth();

  return (
        <div className="admin__nav-top">
            <Container>
                <div className='admin__nav-wrapper-top'>
                    <div className="logo">
                        <h2>FlyNNMart</h2>
                    </div>

                    <div className="search__box">
                        <input type="text" placeholder='Search....'/>
                        <span><i class="ri-search-line"></i></span>
                    </div>

                    <div className="admin__nav-top-to-right">
                        <span><i class="ri-notification-3-line"></i></span>
                        <span><i class="ri-settings-2-line"></i></span>
                        <img src={currentUser.photoURL} alt="" />
                    </div>
                </div >
            </Container>
        </div>
  )
}

export default AdminNav