import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { toast } from "react-toastify";

const WebUser = () => {
    const [webUser,setWebUser]=useState([])

    useEffect(()=>{
        fetch('https://portfolio-dnvt.onrender.com/webuser')
        .then(res => res.json())
        .then(data => setWebUser(data.result))
    },[])



    const deleteInformation = (id)=>{
        const url = `https://portfolio-dnvt.onrender.com/webuser/${id}`
        const confirmDelete = window.confirm('are you sure you want to delete from database? ')
            if(confirmDelete){
                fetch(url,{
                    method:'delete',
                })
                .then(res => res.json())
                .then(data => {
                    const updateinfo = webUser.filter(dlt => dlt._id !== id)
                    setWebUser(updateinfo)
                    toast.success("data delete successfully complete", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                })
            }
    }

    return (
        <Container>
            <Row>
                <Col md={8} className='mx-auto'>
                    <Table>
                        <thead>
                            <tr>
                                <th style={{color:'white',textAlign:'center'}}>email</th>
                                <th style={{color:'white',textAlign:'center'}}>Role</th>
                                <th style={{color:'white',textAlign:'center'}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                webUser.map(singleuser => <tr key={singleuser._id} >
                                    <td style={{color:'white',textAlign:'center'}}>{singleuser.email}</td>
                                    <td style={{textAlign:'center',color:'yellow'}}>{singleuser.role}</td>
                                    <td
                                     style={{color:'red'}}
                                     onClick={()=> deleteInformation(singleuser._id)}
                                     ><FontAwesomeIcon icon={faTrash}/> Delete </td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default WebUser;