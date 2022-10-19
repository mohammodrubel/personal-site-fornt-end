import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Service = () => {
    const [services,setService] = useState([])
    useEffect(()=>{
        fetch('https://portfolio-dnvt.onrender.com/createservice')
        .then(res => res.json())
        .then(data => setService(data.result))
    },[])
    return (
        <Container>
            <Row>
                <h1 style={{color:'white',textAlign:'center'}}>What I <span style={{color:'yellow'}}>Do</span></h1><hr style={{color:'yellow'}} />
                {
                    services.map(singleService => <Col key={singleService._id} md={4}>
                        <div style={{textAlign:'center'}} className='mt-4'>
                            <img src={singleService.servicephoto} style={{width:'140px',height:"140px",
                            borderRadius:'50%'}} />
                            <h6 style={{color:'yellow'}}>{singleService.title}</h6>
                            <p style={{color:'gray'}}>{singleService.description}</p>
                        </div>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Service;