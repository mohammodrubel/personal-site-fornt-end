import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Message = () => {
    const [contact,setContact]=useState([])

    useEffect(()=>{
        fetch('https://portfolio-dnvt.onrender.com/contact')
        .then(res => res.json())
        .then(data => setContact(data.result))
    },[])

    const deleteMessage = (id)=>{
        const confirmed = window.confirm('do you want to delete message?')
        if(confirmed){
            fetch(`https://portfolio-dnvt.onrender.com/contact/${id}`,{
                method:'delete'
            })
            .then(res => res.json())
            .then(data => {
                const updateInfo = contact.filter(info  => info._id !== id)
                setContact(updateInfo)
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
                <h1 className='text-center' style={{color:'yellow'}}>Message</h1><hr style={{color:'yellow'}} />
                    {
                        contact.map(message => <Col md={6} className='mt-5'>
                            <div className='p-4' style={{border:'1px solid gray'}}>
                                <h5 style={{color:'yellow'}}>{message.name}</h5>
                                <span style={{color:'red'}}><b>{message.email}</b></span>
                                <p style={{color:'gray'}}>
                                    {message.text}
                                </p>
                                <button onClick={()=> deleteMessage(message._id)} className='customButton'>Delete Message</button>
                            </div>
                      </Col>)
                    }
            </Row>
        </Container>
    );
};

export default Message;