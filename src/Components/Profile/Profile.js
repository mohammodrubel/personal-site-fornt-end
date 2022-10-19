import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
// get our fontawesome imports
import rubel from '../img/rubel.jpg';

const Profile = () => {
    return (
        <Container fluid>
            <Row>
                   <h1 style={{color:'white'}}>
                       <span style={{color:'yellow'}}> Hello... <br /></span>
                            I am Muhammad <span style={{color:'yellow'}}>Rubel</span><br /> 
                   </h1>
                   <TypeAnimation
                        
                            sequence={[
                                'I Am A Front End Developer',
                                1000, // Waits 1s
                                'I Am A Backend Developer', 
                                1000, 
                                'I Am A Full STACK (MERN) Web Developer', 
                                1500, 
                                () => {
                                console.log('Done typing!'); // Place optional callbacks anywhere in the array
                                }
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{color:'yellow',fontWeight:'500',fontSize:'28px'}}
                            />
                    <p style={{color:'gray',fontSize:'18px'}}>
                    I am a self-motivated web developer and also know back-end web applications.<br/> I am Determined to do hard work sincerely and honestly until I reach the goal. <br />
                    I always wanted to work to as a web developer 
                        with a good team and wanted to take the challenge to meet the goal.

                    </p>
                    
                    <Col>
                        <Row style={{display:'flex',alignItems:'center'}}>
                        <h1 style={{color:'white',marginTop:'30px'}}>About <span style={{color:'yellow'}}>Me</span></h1>
                            <Col md={7}>
                            <p style={{color:'gray',fontSize:'18px'}}>
                       Hi There, I'm Rubel and I am a MERN STACK Web Developer from Dhaka, Bangladesh. I am a positive, passionate, and competent web developer who, over the years, has built up a diverse range of skills, qualities, attributes, explore new features of websites.
                        <br/>
                        I have extensive working experience on challenging web development projects that require outstanding creative and technical capabilities and the ability to ensure all work is optimized across a wide range of platforms.
                        <br/>
                        I take my work as a web developer seriously and this means I always ensure my skills are kept up to date within this rapidly changing industry.
                       </p>
                            </Col>
                            <Col md={5} className='mx-auto text-center'>
                                <img src={rubel} style={{width:'200px',height:'200px',borderRadius:'50%'}} />
                            </Col>
                        </Row>
                    </Col>
            </Row>
        </Container>
    );
};

export default Profile;