import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const CreateSkill = () => {
    const { register, handleSubmit } = useForm();
    const imgStorageKey = '84efa4bb1aca0548bf53924bd648d971'

    const onSubmit = data => {
    const skillImage = data.skillphoto[0]
    const formData = new FormData();
    formData.append('image',skillImage)
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`

        fetch(url,{
            method:'post',
            body:formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const skillPhotos = result.data.url
                const information = {
                    skillname:data.skillName,
                    skillphoto:skillPhotos
                }
                fetch('https://portfolio-dnvt.onrender.com/createskill',{
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
                    <h1 style={{color:'white',textAlign:'center'}}>Create New <span style={{color:'yellow'}}>Skill</span></h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
                        <input className='form-control p-2 mt-4' {...register("skillName", { required: true})} />
                        <input className='form-control p-2 mt-4' type='file' {...register("skillphoto", { required: true})} />
                        <div className='text-center'>
                            <button className='customButton mt-5' type='sbumit'>Add New Skill</button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default CreateSkill;