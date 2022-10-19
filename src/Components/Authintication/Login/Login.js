import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Firebaseinit/Firebase';

const Login = () => {
    const [update,setUpdate]=useState('')
    const [signInWithEmailAndPassword,user,loading,error] = useSignInWithEmailAndPassword(auth);
    

    const onBlurHandeler = e =>{
        const fild = e.target.name;
        const value = e.target.value;
        const newValue = {...update}
        newValue[fild] = value
        console.log(newValue)
        setUpdate(newValue)
    }

   

    const formHandeler = e =>{
        e.preventDefault()
        signInWithEmailAndPassword(update.email,update.password)
    }

    return (
        <Container>
            <Row>
            <h1 style={{color:'white'}} className='text-center'>Login</h1><hr style={{color:'yellow'}} />
                <Col md={6} className='mx-auto'>
                <form onSubmit={formHandeler} className='mt-5'>
                        <div className='text-center mx-auto'>
                        {
                            loading ? <div className='spinner-grow text-danger' role="status"></div> : <p></p>
                        }
                        </div>


                        <input onBlur={onBlurHandeler} name='email' style={{boxShadow:'none',background:'transparent',color:'yellow'}} className='form-control p-3 mt-4' placeholder='Inter Your Email' />


                        <input onBlur={onBlurHandeler} name='password' style={{boxShadow:'none',background:'transparent',color:'yellow'}} className='form-control p-3 mt-4' placeholder='Inter Your Password' />

                        
                        <div className='text-center'><h6 style={{color:'red'}}>{error?.message}</h6></div>
                        <div className=' text-center mt-5'><button type='submit' className='w-25 customButton'>Login</button><br />
                        <p style={{color:'gray',marginTop:'20px'}}>If you have No account please <Link to='/registration'>Register</Link></p>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;