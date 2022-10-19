import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Login from './Components/Authintication/Login/Login';
import Registration from './Components/Authintication/Reg/Registration';
import Contact from './Components/Contact/Contact';
import CreateAdmin from './Components/CreateAdminInformation/CreateAdmin/CreateAdmin';
import CreateProject from './Components/CreateAdminInformation/CreateProject/CreateProject';
import CreateService from './Components/CreateAdminInformation/CreateService/CreateService';
import CreateSkill from './Components/CreateAdminInformation/CreateSkill/CreateSkill';
import DeleteProject from './Components/CreateAdminInformation/DeleteProject/DeleteProject';
import DeleteService from './Components/CreateAdminInformation/DeleteService/DeleteService';
import DeleteSkill from './Components/CreateAdminInformation/DeleteSkill/DeleteSkill';
import Message from './Components/CreateAdminInformation/Message/Message';
import WebUser from './Components/CreateAdminInformation/WebUesr/WebUser';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import Project from './Components/Project/Project';
import Service from './Components/Service/Service';
import Skill from './Components/Skill/Skill';
const App = () => {
  return (
      <div>
        <Routes>
        <Route path="/" element={<Home />} >
            <Route path='/' element={<Profile></Profile>}></Route>
            <Route path='/skill' element={<Skill></Skill>}></Route>
            <Route path='/service' element={<Service></Service>}></Route>
            <Route path='/project' element={<Project></Project>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            {/* create admin information  */}
            <Route path='/createskill'element={<CreateSkill></CreateSkill>}></Route>
            <Route path='/createservice'element={<CreateService></CreateService>}></Route>
            <Route path='/createproject'element={<CreateProject></CreateProject>}></Route>
            <Route path='/deleteskill'element={<DeleteSkill></DeleteSkill>}></Route>
            <Route path='/deleteservice'element={<DeleteService></DeleteService>}></Route>
            <Route path='/deleteproject'element={<DeleteProject></DeleteProject>}></Route>
            <Route path='/registration'element={<Registration></Registration>}></Route>
            <Route path='/login'element={<Login></Login>}></Route>
            <Route path='/createadmin'element={<CreateAdmin></CreateAdmin>}></Route>
            <Route path='/message'element={<Message></Message>}></Route>
            <Route path='/webuser'element={<WebUser></WebUser>}></Route>
        </Route>
    </Routes>
    <ToastContainer />
      </div>
    
  );
};

export default App;