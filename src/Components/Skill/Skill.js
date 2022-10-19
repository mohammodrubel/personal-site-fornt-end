import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Skill = () => {
    const [skills,setSkills]=useState([])

    useEffect(()=>{
        fetch('https://portfolio-dnvt.onrender.com/createskill')
        .then(res => res.json())
        .then(data => setSkills(data.result))
    },[])

   
    return (
        <Container>
            <Row>
            <h1 style={{color:'white',textAlign:'center'}}>Technical <span style={{color:'yellow'}}>Skills</span></h1> <hr style={{color:'yellow'}} />
                {
                    skills.map(singleSkill => <Col lg={3} md={4} sm={6} key={singleSkill._id} className='mx-auto text-center'>
                        <div className='mt-4'>
                            <img  src={singleSkill?.skillphoto} style={{width:"120px"}} />
                            <h4>{singleSkill?.skillname}</h4>
                        </div>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Skill;