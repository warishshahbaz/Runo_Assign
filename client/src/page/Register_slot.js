import React, { useEffect, useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom';

const SignUp = () => {
    const[name,setName] = useState('');
    const[pincode,setPinCode] = useState('');
    const[adhar,setAdhar] = useState('');
    const[dateOfBirth,setDateOfBirth] = useState('');
    const[phone,setPhone] = useState('');
    
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
            body:JSON.stringify({name,adhar,dateOfBirth,phone,pincode}),
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
    <div className='signup ' >
    <h1>Register</h1>
        <Form onSubmit={submitHandler} className="form w-70" >
            <Form.Group className='mb-3' controlId="formBasicText" >
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder='Name'
                 value={name} onChange={(e)=>setName(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3' controlId="formBasicEmail" >
                <Form.Label>D O B</Form.Label>
                <Form.Control type='date' placeholder='email'
                value={dateOfBirth} onChange={(e)=>setDateOfBirth(e.target.value)}
                 />
            </Form.Group>
            <Form.Group className='mb-3' controlId="formBasicPassword" >
                <Form.Label>Adhar No</Form.Label>
                <Form.Control type='number' placeholder='adhar no..'
                value={adhar} onChange={(e)=>setAdhar(e.target.value) }
                 />
            </Form.Group>
           
            <Form.Group className='mb-3' controlId="formBasicPassword" >
                <Form.Label>Phone</Form.Label>
                <Form.Control type='text' placeholder='Phone'
                value={phone} onChange={(e)=>setPhone(e.target.value) }
                 />
            </Form.Group>
            <Form.Group className='mb-3' controlId="formBasicPassword" >
                <Form.Label>Pincode</Form.Label>
                <Form.Control type='text' placeholder='pincode'
                value={pincode} onChange={(e)=>setPinCode(e.target.value) }
                 />
            </Form.Group>
            <Button type='submit' variant="primary"  >Register</Button>
        </Form>
    </div>
  )
}

export default SignUp