import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import './Contact';

const Contact = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch('https://portfolio-dnvt.onrender.com/contact',{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        toast.success("sending successfull", {
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
  };
    return (
        <Container>
            <Row>
                <h1 style={{color:'yellow',textAlign:'center'}}>Contacts</h1><hr style={{color:'yellow'}}/>
                <Col md={6} className='mx-auto'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input 
                            placeholder='Your Name'
                            className='form-control p-3'
                            style={{background:'transparent',color:'white',boxShadow:'none',marginTop:'20px'}}
                            {...register("name", { required: true })} 
                            aria-invalid={errors.firstName ? "true" : "false"} 
                        />
                        {errors.firstName?.type === 'required' && <p style={{color:'red'}} role="alert">First name is required</p>}

                        <input 
                            placeholder='Input Your Email'
                            type="email"
                            className='form-control p-3'
                            style={{background:'transparent',color:'white',boxShadow:'none',marginTop:'20px'}}
                            {...register("email", { required: "Email Address is required" })} 
                            aria-invalid={errors.email ? "true" : "false"} 
                        />
                        {errors.email && <p style={{color:'red'}} role="alert">{errors.email?.message}</p>}

                        <textarea rows={6} 
                            placeholder='say somthing....'
                            className='form-control p-3'
                            style={{background:'transparent',color:'white',boxShadow:'none',marginTop:'20px'}}
                            {...register("text", { required: "Email Address is required" })} 
                            aria-invalid={errors.text ? "true" : "false"} 
                        />
                        {errors.text?.type === 'required' && <p style={{color:'red'}} role="alert"> Text is required</p>}
                        
                        <div className='text-center mt-3'><button className='w-25 customButton' type='submit'>Submit</button></div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;