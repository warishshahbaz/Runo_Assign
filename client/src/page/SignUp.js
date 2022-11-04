import React, { useEffect, useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom';

const SignUp = () => {
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    //const navigate = useNavigate();

    useEffect(()=>{
        let auth = localStorage.getItem('user');
        // if(auth){
        //     navigate('/');
        // }
    })
    const submitHandler = async (e) =>{
        e.preventDefault();
        let result = await fetch("http://localhost:5000/register",{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        
        result = await result.json();
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result.result));
        localStorage.setItem("token",JSON.stringify(result.auth));
     
        // if(result){
        //     navigate('/');
        // }
    }
   
    
   
  return (
    <div className='signup' >
    <h1>Register</h1>
        <Form onSubmit={submitHandler} className="form w-70" >
            <Form.Group className='mb-3' controlId="formBasicText" >
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder='Name'
                 value={name} onChange={(e)=>setName(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3' controlId="formBasicEmail" >
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='email'
                value={email} onChange={(e)=>setEmail(e.target.value)}
                 />
            </Form.Group>
            <Form.Group className='mb-3' controlId="formBasicPassword" >
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='password'
                value={password} onChange={(e)=>setPassword(e.target.value) }
                 />
            </Form.Group>
            <Button type='submit' variant="primary"  >Register</Button>
        </Form>
    </div>
  )
}

export default SignUp