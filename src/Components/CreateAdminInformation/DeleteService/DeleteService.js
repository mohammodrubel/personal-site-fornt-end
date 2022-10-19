import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
// get our fontawesome imports
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from 'react-toastify';

const DeleteService = () => {
    const [service,setDeleteService]=useState([])

    useEffect(()=>{
        fetch('https://portfolio-dnvt.onrender.com/createservice')
        .then(res => res.json())
        .then(data => setDeleteService(data.result))
    },[])

    const deleteInformation= (id)=>{
        const url = `https://portfolio-dnvt.onrender.com/createservice/${id}`
        const confirm = window.confirm('are you sure you want to delete from database?' )
        if(confirm){
            fetch(url,{
                method:'delete'
            })
            .then(res => res.json())
            .then(data => {
                const updateinfo = service.filter(dlt => dlt._id !== id)
                setDeleteService(updateinfo)
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
            <h1 style={{color:'white',textAlign:'center'}}>Delete Create <span style={{color:'yellow'}}>Service</span></h1> 
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
                                service.map(singleServiceinfo => <tr key={singleServiceinfo._id} >
                                    <td style={{color:'white',textAlign:'center'}}>{singleServiceinfo.title}</td>

                                    <td style={{color:'white',textAlign:'center'}}><img src={singleServiceinfo.servicephoto} style={{width:'100px',height:'100ox',borderRadius:'50%'}}/></td>

                                    <td
                                     style={{color:'red'}}
                                     onClick={()=> deleteInformation(singleServiceinfo._id)}
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

export default DeleteService;