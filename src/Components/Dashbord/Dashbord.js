import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import './Dashbord.scss';

const Dashbord = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className='dashbord'>
                        <Outlet />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashbord;