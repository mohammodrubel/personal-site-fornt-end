import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// get our fontawesome imports
import { faGear, faLightbulb, faMessage, faRightFromBracket, faTrash, faUser, faUserGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import logo from '../img/borderlogo.jpg'
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import AdminInfo from '../Authintication/AdminInfo/AdminInfo';
import auth from '../Authintication/Firebaseinit/Firebase';
import logo from '../img/borderlogo.jpg';
import './Sidebar.scss';
const Sidebar = () => {
    const [currentLink,setCurrentLink]=useState(1)
    const [user, loading, error] = useAuthState(auth);
    const [admin]= AdminInfo()
    console.log(admin)

    const logout = () => {
        signOut(auth);
      };
    return (
        <Container fluid className='fullsidebar'>
            <div className='sidebarContainer'>
                <div className='top'>
                    <div className='brand'>
                            <h4 className='text-center name' data-text="Md.Rubel">Md.Rubel</h4><br />
                    </div>
                    <div style={{margin:'0 auto',textAlign:'center'}}>
                        <img src={logo} style={{width:'100px',height:'100px',borderRadius:'50%'}} />
                        <div>
                            <ul className="list-inline">
                                <li className='list-inline-item mx-2 mt-3'><a style={{color:'yellow',fontSize:'22px'}} href='https://github.com/mohammodrubel'target="_blank" ><i class="fa-brands fa-github"></i></a></li>
                                
                                <li className='list-inline-item mx-2 mt-3'><a style={{color:'yellow',fontSize:'22px'}} href='https://www.linkedin.com/in/mohammodrubel00/'target="_blank" ><i className="fa-brands fa-linkedin-in"></i></a></li>

                                <li className='list-inline-item mx-2 mt-3'><a style={{color:'yellow',fontSize:'22px'}} href='https://www.facebook.com/mohammodrubel00/'target="_blank" ><i className="fa-brands fa-facebook"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className='links'>
                        <ul >
                            <li onClick={()=> setCurrentLink(1)} className={currentLink === 1 ? 'acticeSidebar' : ''}><Link className='listLInk' to='/'><FontAwesomeIcon icon={faUser}/>Profile</Link></li>
                            

                            <li onClick={()=> setCurrentLink(2)} className={currentLink === 2 ? 'acticeSidebar' : ''}><Link className='listLInk' to='/skill'><FontAwesomeIcon icon={faGear}/>Skill</Link></li>
                            
                            <li onClick={()=> setCurrentLink(3)} className={currentLink === 3 ? 'acticeSidebar' : ''}><Link className='listLInk' to='/service'><FontAwesomeIcon icon={faGear}/>Service</Link></li>

                            <li onClick={()=> setCurrentLink(4)} className={currentLink === 4 ? 'acticeSidebar' : ''}><Link className='listLInk' to='/project'><FontAwesomeIcon icon={faLightbulb}/>Project</Link></li>
                            
                            <li onClick={()=> setCurrentLink(5)} className={currentLink === 5 ? 'acticeSidebar' : ''}><Link className='listLInk' to='/contact'><FontAwesomeIcon icon={faMessage}/>Contact</Link></li>


                            {/* admin  */}

                            {
                                admin && <div>
                                    <li onClick={()=> setCurrentLink(6)} className={currentLink === 6 ? 'acticeSidebar mt-3' : 'mt-3'}><Link className='listLInk' to='/createskill'><FontAwesomeIcon icon={faUserGear}/>CreateSkill</Link></li>

                                    <li onClick={()=> setCurrentLink(7)} className={currentLink === 7 ? 'acticeSidebar mt-3' : 'mt-3'}><Link className='listLInk' to='/createservice'><FontAwesomeIcon icon={faUserGear}/>Create Service</Link></li>

                                    <li onClick={()=> setCurrentLink(8)} className={currentLink === 8 ? 'acticeSidebar mt-3' : 'mt-3'}><Link className='listLInk' to='/createproject'><FontAwesomeIcon icon={faUserGear}/>Create Project</Link></li>


                                    <li onClick={()=> setCurrentLink(9)} className={currentLink === 9 ? 'acticeSidebar mt-3' : 'mt-3'}><Link className='listLInk' to='/deleteskill'><FontAwesomeIcon icon={faTrash}/>Delete Skill</Link></li>

                                    <li onClick={()=> setCurrentLink(10)} className={currentLink === 10 ? 'acticeSidebar mt-3' : 'mt-3'}><Link className='listLInk' to='/deleteservice'><FontAwesomeIcon icon={faTrash}/>Delete Service</Link></li>

                                    <li onClick={()=> setCurrentLink(11)} className={currentLink === 11 ? 'acticeSidebar mt-3' : 'mt-3'}><Link className='listLInk' to='/deleteproject'><FontAwesomeIcon icon={faTrash}/>Delete Project</Link></li>

                                    <li onClick={()=> setCurrentLink(12)} className={currentLink === 12 ? 'acticeSidebar mt-3' : 'mt-3'}><Link className='listLInk' to='/createadmin'><FontAwesomeIcon icon={faUser}/>Create Admin</Link></li>

                                    <li onClick={()=> setCurrentLink(13)} className={currentLink === 13 ? 'acticeSidebar mt-3' : 'mt-3'}><Link className='listLInk' to='/message'><FontAwesomeIcon icon={faMessage}/>User Message</Link></li>

                                </div>
                            }
                            {user?.email ? <li><Link className='listLInk' to='' onClick={()=>logout()}><FontAwesomeIcon icon={faRightFromBracket}/>Logout</Link></li>
                                    :<li><Link to='/login' className='listLInk'><FontAwesomeIcon icon={faRightFromBracket}/>Login</Link></li>}                            
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Sidebar;