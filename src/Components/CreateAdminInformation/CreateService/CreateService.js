import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const CreateService = () => {
    const { register, handleSubmit } = useForm();
    const imgStorage = '84efa4bb1aca0548bf53924bd648d971'


    const onSubmit = data => {
        const servicimg = data.servicephoto[0]
        const formData = new FormData();
        formData.append('image',servicimg)
        const url = `https://api.imgbb.com/1/upload?key=${imgStorage}`

            fetch(url,{
                method:'post',
                body:formData
            })
            .then(res => res.json())
            .then(result =>{
                if(result.success){
                    const img = result.data.url;
                    const information = {
                        title :data.title,
                        description:data.description,
                        servicephoto:img
                    };
                    fetch('https://portfolio-dnvt.onrender.com/createservice',{
                    method:'post',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(information)
                })
                .then(responce => responce.json())
                .then(updateData =>{
                    toast.success("New Skill Created Successfully", {
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
            })
    };
    return (
        <Container>
            <Row>
                <Col md={6} className='mx-auto'>
                    <h1 style={{color:'white',textAlign:'center'}}>Create New <span style={{color:'yellow'}}>Service</span></h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Title' className='p-2 mt-4 form-control' {...register("title", { required: true})} />

                        <textarea rows={5} placeholder='Description' className='p-2 mt-4 form-control' {...register("description", {required: true})} />

                        <input type='file' className='p-2 mt-4 form-control' {...register("servicephoto",{required: true})} />

                        <div className='text-center mt-5'><button className='customButton w-50'type='submit'>Submit</button></div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default CreateService;