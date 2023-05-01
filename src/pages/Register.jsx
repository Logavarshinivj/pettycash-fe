import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import{useState} from "react"
import{Link, useNavigate} from "react-router-dom"
import { useEffect } from 'react';

function Register() {
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const navigate=useNavigate()
  useEffect(()=>{
    const auth=localStorage.getItem('user')
    if(auth){
      navigate("/")
    }
  },[])
  const collectData=async()=>{
    setEmailError('')
    setPasswordError('')
    if (!email) {
      setEmailError('Email is required')
      return
    }
    if (!password) {
      setPasswordError('Password is required')
      return
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address')
      return
    }
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long')
      return
    }
    let result=await fetch("http://localhost:4000/register-petty",
    {
      method: 'POST',
      body: JSON.stringify({email,password}),
      headers: { 'Content-Type': 'application/json'}
    })
  
    result= await result.json()
    if(result.message === 'User already exists'){
      alert("User already exists")
  }
    else if(result){
        localStorage.setItem("user", JSON.stringify(result))
       
        alert("Registration Successful")
        navigate("/login-petty")
          
      }
    else{
        alert("already registered")
    }
    
    // if(result){
    //   localStorage.setItem("user", JSON.stringify(result))
    //   navigate("/")
    // }
  }
  return (
    <div>
    <h1 className="app-name">PETTY CASH💷</h1>
    <h2 className="sign-in-heading">SIGN UP</h2>

    <div className="sign-in">
    
    <label className='lbl1'><b>Email Address
        </b>
        </label>
        <input type="email" name="email" className="Uname" placeholder="Email Address" value={email} onChange={(event)=>setEmail(event.target.value)}/>
        <br></br>
        {emailError && <p className="error" style={{ color: "red" }}>{emailError}</p>}
        <br></br>
        <label className='lbl2'><b>Create Password
        </b>
        </label>
        <input type="password" name="pass" className="pass"  placeholder="Password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
        <br></br>
        {passwordError && <p className="error" style={{ color: "red" }} >{passwordError}</p>}
        <br></br>
      {/* <TextField  id="standard-basic" label="Email Address" variant="standard"color="secondary" type="email" placeholder="Enter your email address" value={email} onChange={(event)=>setEmail(event.target.value)}/>
      <TextField id="standard-basic" label="Password" variant="standard"color="secondary" type="password"  placeholder="Set your password" value={password} onChange={(event)=>setPassword(event.target.value)}/> */}
      <button variant="contained"  type="button" className='btn-signin' onClick={collectData} >Sign Up</button> 
      <br></br>
      <br></br>
      <Link to="/login-petty" className='link'>Already Registered? Click Here to login</Link>
     
    </div>
   
    </div>
  //   <div className='signup-form'>
  //   <h1>Register</h1>
  //   <TextField  id="standard-basic" label="Email Address" variant="standard"color="secondary" type="email" placeholder="Enter your email address" value={email} onChange={(event)=>setEmail(event.target.value)}/>
  //   <TextField id="standard-basic" label="Password" variant="standard"color="secondary" type="password"  placeholder="Set your password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
  //   <Button  variant="contained"  type="button" onClick={collectData} >Sign Up</Button>
  //   <Link to="/login">Already Registered? Click Here to login</Link>
   
  // </div>
  )
}

export default Register