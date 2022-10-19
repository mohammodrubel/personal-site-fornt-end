import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Project.scss';

const Project = () => {
    const [myproject,setMyProject]=useState([])
    
    useEffect(()=>{
        fetch('https://portfolio-dnvt.onrender.com/createproject')
        .then(res => res.json())
        .then(data => setMyProject(data.result))
    },[])

    return (
        <Container>
            <Row>
                <h1 style={{color:'white',textAlign:'center'}}>My <span style={{color:'yellow'}}>Portfolio</span></h1><hr style={{color:'yellow'}} />
                {
                    myproject.map(singleProject => <Col md={6} key={singleProject._id} className='mt-5'>
                       <div className='mainContainerBannerOne'>
                                <img src={singleProject.projectphoto} className='img-fluid'/>
                                    <div className='overlayBanner'>
                                        <h5 style={{color:'yellow'}}>{singleProject.title}</h5>
                                        <div style={{display:'flex',justifyContent:'space-between',gap:'30px'}}>
                                        <a style={{color:'yellow',textDecoration:'none'}} href={singleProject.livesitelink} target="_blank">Live Site Link</a>

                                        <a style={{color:'yellow',textDecoration:'none'}} href={singleProject.clientlink} target="_blank">Front-End Code</a>

                                        </div>
                                        <div style={{display:'flex',justifyContent:'space-between',gap:'30px'}}>
                                        <a style={{color:'yellow',textDecoration:'none'}} href={singleProject.serverlink} target="_blank">Back-End  Code</a>

                                        <a style={{color:'yellow',textDecoration:'none'}} href={singleProject.videolink} target="_blank">OverView</a>
                                        </div>
                                    </div>
                            </div>
                        <h4 style={{color:'yellow'}}>Front End </h4>
                        <p style={{color:"gray"}}>{singleProject.front}</p>
                        <h4 style={{color:'yellow'}}>Backend</h4>
                        <p style={{color:'gray'}}>{singleProject.backend}</p>
                        <h6 style={{color:'red'}}>Web Technologies in use</h6>
                        <p style={{color:'yellow'}}>{singleProject.tecnology}</p>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Project;