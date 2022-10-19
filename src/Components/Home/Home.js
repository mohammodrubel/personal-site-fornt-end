import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CustomNavbar from '../CustomNavbar/CustomNavbar';
import Dashbord from '../Dashbord/Dashbord';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <CustomNavbar></CustomNavbar>
                <Sidebar></Sidebar>
                <Dashbord></Dashbord>
            </Row>
        </Container>
    );
};

export default Home;