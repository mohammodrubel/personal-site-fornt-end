import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
// get our fontawesome imports
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from 'react-toastify';

const DeleteProject = () => {
    const [project,setProject]=useState([])
    useEffect(()=>{
        fetch(`https://portfolio-dnvt.onrender.com/createproject`)
        .then(res => res.json())
        .then(data => setProject(data.result))
    },[])

    const deleteInformation = (id)=>{
        const url = `https://portfolio-dnvt.onrender.com/createproject/${id}`
        const confirmDelete = window.confirm('are you sure you want to delete from database? ')
            if(confirmDelete){
                fetch(url,{
                    method:'delete',
                })
                .then(res => res.json())
                .then(data => {
                    const updateinfo = project.filter(dlt => dlt._id !== id)
                    setProject(updateinfo)
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
            <h1 style={{color:'white',textAlign:'center'}}>Delete <span style={{color:'yellow'}}>Project</span></h1>
            <hr style={{color:'yellow'}} />
                <Col>
                <Table>
                        <thead>
                            <tr>
                                <th style={{color:'white',textAlign:'center'}}>Name</th>
                                <th style={{color:'white',textAlign:'center'}}>Img</th>
                                <th style={{color:'white',textAlign:'center'}}>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                project.map(singleproject => <tr key={singleproject._id} >
                                    <td style={{color:'white',textAlign:'center'}}>{singleproject.title}</td>
                                    <td style={{textAlign:'center'}}><img src={singleproject.projectphoto} style={{width:'100px',height:'100px',borderRadius:'50%'}}  /></td>
                                    <td
                                     style={{color:'red'}}
                                     onClick={()=> deleteInformation(singleproject._id)}
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

export default DeleteProject;