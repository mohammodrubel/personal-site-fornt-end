import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const CreateProject = () => {
    const { register, handleSubmit } = useForm();
    const imgStorage = '84efa4bb1aca0548bf53924bd648d971'

    const onSubmit = data => {
        const imgfile = data.projectphoto[0]
        const formData = new FormData();
        formData.append('image',imgfile)
        const url = `https://api.imgbb.com/1/upload?key=${imgStorage}`
        fetch(url,{
            method:'post',
            body:formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const img = result.data.url
                const information = {
                    title:data.title,
                    clientlink:data.clientlink,
                    serverlink:data.serverlink,
                    videolink:data.videolink,
                    livesitelink:data.livesitelink,
                    front:data.front,
                    backend:data.backend,
                    tecnology:data.tecnology,
                    projectphoto:img
                }
                fetch(`https://portfolio-dnvt.onrender.com/createproject`,{
                    method:'post',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(information)
                })
                .then(res => res.json())
                .then(inserted => {
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
    }
    return (
        <Container>
            <Row>
                <Col md={6} className='mx-auto'>
                    <h1 style={{color:'white'}} className='text-center'>Create New <span style={{color:'yellow'}}>Project</span></h1>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input className='form-control p-3 mt-3'placeholder='Service Title' style={{boxShadow:'none',color:'yellow',background:'transparent'}} {...register("title", { required: true})} />

                        <input className='form-control p-3 mt-3'placeholder='Client Link' style={{boxShadow:'none',color:'yellow',background:'transparent'}} {...register("clientlink", { required: true})} />

                        <input className='form-control p-3 mt-3'placeholder='Server Link' style={{boxShadow:'none',color:'yellow',background:'transparent'}} {...register("serverlink", { required: true})} />

                        <input className='form-control p-3 mt-3'placeholder='Video Link' style={{boxShadow:'none',color:'yellow',background:'transparent'}} {...register("videolink", { required: true})} />

                        <input className='form-control p-3 mt-3'placeholder='Live Site Link' style={{boxShadow:'none',color:'yellow',background:'transparent'}} {...register("livesitelink", { required: true})} />

                        <input className='form-control p-3 mt-3'placeholder='Tecnology use' style={{boxShadow:'none',color:'yellow',background:'transparent'}} {...register("tecnology", { required: true})} />

                        <textarea rows={3} className='form-control p-3 mt-3'placeholder='Forntend Description' style={{boxShadow:'none',color:'yellow',background:'transparent'}} {...register("front", { required: true})} />

                        <textarea rows={3} className='form-control p-3 mt-3'placeholder='Backend Description' style={{boxShadow:'none',color:'yellow',background:'transparent'}} {...register("backend", { required: true})} />
                        
                        <input type='file' className='form-control p-2 mt-3' style={{boxShadow:'none',color:'yellow',background:'transparent'}} {...register("projectphoto", { required: true})} />
                        
                        <div className='text-center'><button className='mt-5 customButton'>Create New Project</button></div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default CreateProject;