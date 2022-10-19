// import { faBars ,faGear, faLightbulb, faMessage, faUser, faUsersGear } from "@fortawesome/free-solid-svg-icons";
import { faBars, faGear, faLightbulb, faMessage, faRightFromBracket, faTrash, faUser, faUserGear, faUsersGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import AdminInfo from "../Authintication/AdminInfo/AdminInfo";
import auth from '../Authintication/Firebaseinit/Firebase';
import logo from '../img/borderlogo.jpg';
import './CustomNavbar.scss';
const CustomNavbar = () => {
    const [activeHamburger,setActiveHamburger]=useState(false)
    const [indexLink,setIndexLink]=useState(1)
    const [user, loading, error] = useAuthState(auth);
    const [admin]= AdminInfo()

    const logout = () => {
        signOut(auth);
      };
    return (
        <Container fluid className="mobileNav">
            <Row>
                <Col style={{position:'relative'}}>
                    <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px',alignItems:'center'}}>
                        
                        <div style={{display:'flex',alignItems:'center',gap:'30px'}}>
                            <img src={logo} className='img-fluid' style={{width:'50px',height:'50px',borderRadius:'50%'}} />
                            <h4 className="name" data-text="Md.Rubel">Md.Rubel</h4>
                        </div>
                        
                        <div onClick={()=> setActiveHamburger(!activeHamburger)}>
                            <FontAwesomeIcon style={{color:'white',fontSize:'24px'}} icon={faBars} />
                        </div>
                    </div>

                    {/* Custom Link  */}
                    <div >
                        <div className={activeHamburger ? 'mobileLink activeNavbarinfo' :'mobileLink' }>
                        <h4 className="name" data-text="Md.Rubel">Md.Rubel</h4>
                            <img src={logo} className='img-fluid' style={{width:'100px',height:'100px',borderRadius:'50%'}} />
                                <div>
                                    <ul className="list-inline">
                                        <li className='list-inline-item mx-2 mt-3'><a style={{color:'yellow',fontSize:'22px'}} href='https://github.com/mohammodrubel'target="_blank" ><i class="fa-brands fa-github"></i></a></li>
                                        
                                        <li className='list-inline-item mx-2 mt-3'><a style={{color:'yellow',fontSize:'22px'}} href='https://www.linkedin.com/in/mohammodrubel00/'target="_blank" ><i className="fa-brands fa-linkedin-in"></i></a></li>

                                        <li className='list-inline-item mx-2 mt-3'><a style={{color:'yellow',fontSize:'22px'}} href='https://www.facebook.com/mohammodrubel00/'target="_blank" ><i className="fa-brands fa-facebook"></i></a></li>
                                    </ul>
                            </div>
                            <div>
                                <ul>
                                    <li onClick={()=>setIndexLink(1)} className={indexLink === 1 ? 'mobilelinkitem p-2 activeIndex': 'mobilelinkitem p-2'}>
                                        <Link className="mobileLinkGo" to='/'><FontAwesomeIcon style={{margin:'0 20px'}} icon={faUser}/>Profile</Link>
                                    </li>

                                    <li onClick={()=>setIndexLink(2)} className={indexLink === 2 ? 'mobilelinkitem p-2 activeIndex': 'mobilelinkitem p-2'}>
                                        <Link className="mobileLinkGo" to='/skill'><FontAwesomeIcon style={{margin:'0 20px'}} icon={faGear}/>Skill</Link>
                                    </li>

                                    <li onClick={()=>setIndexLink(3)} className={indexLink === 3 ? 'mobilelinkitem p-2 activeIndex': 'mobilelinkitem p-2'}>
                                        <Link className="mobileLinkGo" to='/service'><FontAwesomeIcon style={{margin:'0 20px'}} icon={faUsersGear}/>Service</Link>
                                    </li>

                                    <li onClick={()=>setIndexLink(4)} className={indexLink === 4 ? 'mobilelinkitem p-2 activeIndex': 'mobilelinkitem p-2'}>
                                        <Link className="mobileLinkGo" to='/project'><FontAwesomeIcon style={{margin:'0 20px'}} icon={faLightbulb}/>Project</Link>
                                    </li>

                                    <li onClick={()=>setIndexLink(5)} className={indexLink === 5 ? 'mobilelinkitem p-2 activeIndex': 'mobilelinkitem p-2'}>
                                        <Link className="mobileLinkGo" to='/contact'><FontAwesomeIcon style={{margin:'0 20px'}} icon={faMessage}/>Contact</Link>
                                    </li>

                                    {/* admin  */}

                                    {
                                        admin && <div>
                                            <li onClick={()=>setIndexLink(6)} className={indexLink === 6 ? 'mobilelinkitem p-2 activeIndex': 'mobilelinkitem p-2'}>
                                        <Link className="mobileLinkGo" to='/createskill'><FontAwesomeIcon style={{margin:'0 20px'}} icon={faUserGear}/>Create Skill</Link>
                                    </li>

                                    <li onClick={()=>setIndexLink(7)} className={indexLink === 7 ? 'mobilelinkitem p-2 activeIndex': 'mobilelinkitem p-2'}>
                                        <Link className="mobileLinkGo" to='/createservice'><FontAwesomeIcon style={{margin:'0 20px'}} icon={faUserGear}/>Create Service</Link>
                                    </li>

                                    <li onClick={()=>setIndexLink(8)} className={indexLink === 8 ? 'mobilelinkitem p-2 activeIndex': 'mobilelinkitem p-2'}>
                                        <Link className="mobileLinkGo" to='/createproject'><FontAwesomeIcon style={{margin:'0 20px'}} icon={faUserGear}/>Create Project</Link>
                                    </li>

                                    <li onClick={()=>setIndexLink(9)} className={indexLink === 9 ? 'mobilelinkitem p-2 activeIndex': 'mobilelinkitem p-2'}>
                                        <Link className="mobileLinkGo" to='/deleteskill'><FontAwesomeIcon style={{margin:'0 20px'}} icon={faTrash}/>Delete Project</Link>
                                    </li>

                                    <li onClick={()=>setIndexLink(10)} className={indexLink === 10 ? 'mobilelinkitem p-2 activeIndex': 'mobilelinkitem p-2'}>
                                        <Link className="mobileLinkGo" to='/deleteservice'><FontAwesomeIcon style={{margin:'0 20px'}} icon={faTrash}/>Delete Service</Link>
                                    </li>

                                    <li onClick={()=>setIndexLink(11)} className={indexLink === 11 ? 'mobilelinkitem p-2 activeIndex': 'mobilelinkitem p-2'}>
                                        <Link className="mobileLinkGo" to='/deleteproject'><FontAwesomeIcon style={{margin:'0 20px'}} icon={faTrash}/>Delete Project</Link>
                                    </li>


                                    <li onClick={()=>setIndexLink(12)} className={indexLink === 12 ? 'mobilelinkitem p-2 activeIndex': 'mobilelinkitem p-2'}>
                                        <Link className="mobileLinkGo" to='/createadmin'><FontAwesomeIcon style={{margin:'0 20px'}} icon={faUser}/>Create Admin</Link>
                                    </li>

                                    <li onClick={()=>setIndexLink(13)} className={indexLink === 13 ? 'mobilelinkitem p-2 activeIndex': 'mobilelinkitem p-2'}>
                                        <Link className="mobileLinkGo" to='/message'><FontAwesomeIcon style={{margin:'0 20px'}} icon={faMessage}/>User Message</Link>
                                    </li>

                                        </div>
                                    }
                                    {user?.email ? <li className='mobilelinkitem p-2 '>
                                    <Link className="mobileLinkGo" ><FontAwesomeIcon style={{margin:'0 20px'}} icon={faRightFromBracket}/>Logout</Link>
                                </li>:
                                <li className='mobilelinkitem p-2'>
                                <Link to='/login' className="mobileLinkGo" ><FontAwesomeIcon style={{margin:'0 20px'}} icon={faRightFromBracket}/>Login</Link>
                            </li>
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );

};

export default CustomNavbar;