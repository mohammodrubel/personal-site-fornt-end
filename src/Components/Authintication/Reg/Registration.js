import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import useExtraInformation from '../../Hooks/useExtraInformation';
import auth from '../Firebaseinit/Firebase';



const Registration = () => {
    const [update,setUpdate]=useState('')
    const [createUserWithEmailAndPassword,user,loading,error] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    // const [token]= useToken(user || googleuser)
    const [information] = useExtraInformation(user||googleUser)

    

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

        if(update?.name.length === 0){
            alert('name is Required')
            return
        }

        if(update.password !== update.rePassword){
            alert('password did not matched!')
            return
        }
        createUserWithEmailAndPassword(update.email,update.password)
    }


    return (
        <Container>
            <Row>
            <h1 style={{color:'white',textAlign:'center'}}>Registration</h1><hr style={{color:'yellow'}} />
                <Col md={6} className='mx-auto'>
                
                    <form onSubmit={formHandeler}>
                        <div className='text-center mx-auto'>
                        {
                            (loading || googleLoading) ? <div className='spinner-grow text-danger' role="status"></div> : <p></p>
                        }
                        </div>

                        <input onBlur={onBlurHandeler} name='name' style={{boxShadow:'none',background:'transparent',color:'yellow'}} className='form-control p-3 mt-4' placeholder='Full Name' />


                        <input onBlur={onBlurHandeler} name='email' style={{boxShadow:'none',background:'transparent',color:'yellow'}} className='form-control p-3 mt-4' placeholder='Inter Your Email' />


                        <input onBlur={onBlurHandeler} name='password' style={{boxShadow:'none',background:'transparent',color:'yellow'}} className='form-control p-3 mt-4' placeholder='Inter Your Password' />


                        <input onBlur={onBlurHandeler} name='rePassword' style={{boxShadow:'none',background:'transparent',color:'yellow'}} className='form-control p-3 mt-4' placeholder='Re-password'/>
                        
                        <div className='text-center'><h6 style={{color:'red'}}>{error?.message || googleError?.message}</h6></div>
                        <div className='text-center mt-5'><button type='submit' className='customButton'>Registration</button></div>
                        <div className='text-center mt-2' onClick={()=> signInWithGoogle()}><button  className='customButton'>Sing In With Google</button></div>
                        <p style={{color:'gray',marginTop:'20px',textAlign:'center'}}>If you have a already Account please <Link to='/login'>Login</Link></p>


                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Registration;