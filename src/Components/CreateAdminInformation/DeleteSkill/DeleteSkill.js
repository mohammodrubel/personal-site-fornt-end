import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
// get our fontawesome imports
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from 'react-toastify';

const DeleteSkill = () => {
    const [deleteData,setDeleteData]=useState([])

    useEffect(()=>{
        fetch('https://portfolio-dnvt.onrender.com/createskill')
        .then(res => res.json())
        .then(data => setDeleteData(data.result))
    },[])

    const deleteInformation = (id)=>{
        const url = `https://portfolio-dnvt.onrender.com/createskill/${id}`
        const confirmDelete = window.confirm('are you sure you want to delete from database? ')
            if(confirmDelete){
                fetch(url,{
                    method:'delete',
                })
                .then(res => res.json())
                .then(data => {
                    const updateinfo = deleteData.filter(dlt => dlt._id !== id)
                    setDeleteData(updateinfo)
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
            <h1 style={{color:'white',textAlign:'center'}}>Delete Create <span style={{color:'yellow'}}>Skill</span></h1> 
                    < hr style={{color:"yellow"}} />
                <Col md={8} className='mx-auto'>
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
                                deleteData.map(singleSkill => <tr key={singleSkill._id} >
                                    <td style={{color:'white',textAlign:'center'}}>{singleSkill.skillname}</td>
                                    <td style={{textAlign:'center'}}><img src={singleSkill.skillphoto} style={{width:'100px',height:'100px',borderRadius:'50%'}}  /></td>
                                    <td
                                     style={{color:'red'}}
                                     onClick={()=> deleteInformation(singleSkill._id)}
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

export default DeleteSkill;