import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';

const CreateAdmin = () => {
    const [email,setEmail] = useState('')

    const handleOnSubmit = e =>{
        setEmail(e.target.value) 
        
    }

    const onSubmitHandeler = e => {
        e.preventDefault()
        const user = {email}
            fetch('https://portfolio-dnvt.onrender.com/webuser/admin',{
                method:'put',
               headers:{
                'content-type':'application/json'
               },
               body:JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                toast.success("New Admin Created Successfull", {
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

   
   

    return (
        <Container>
            <Row>
                <h1 className='text-center' style={{color:'white'}}>Create New <span style={{color:'yellow'}}>Admin</span></h1>
                <Col md={6} className='mx-auto'>
                    <form onSubmit={onSubmitHandeler}>

                        <input 
                            style={{color:'yellow',background:'transparent',boxShadow:'none'}} 
                            onBlur={handleOnSubmit} 
                            name='email' 
                            className='form-control p-3 m-5'
                        />

                        <div className='text-center'><button type='submit' className='customButton'>Create Admin</button></div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default CreateAdmin;