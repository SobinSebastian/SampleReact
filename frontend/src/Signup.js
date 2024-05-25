import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Signup() {
  const [values,setValues] = useState({
    'uname' :'',
    'email' :'',
    'password' : ''
  })

  const navigate = useNavigate();
  const [errors,setErrors] = useState({});

  const handleInput = (event=>{
    const {name,value}=event.target;
    setValues((prev)=>({...prev,[name]:value}));
  })

  function validation (values){
    const errors = {};
    if (!values.uname) {
      errors.uname = 'username is required.';
    } else if (values.uname.length < 6) {
      errors.uname = 'username must be at least 6 characters long.';
    }
    else{
      errors.uname ='';
    }

    if (!values.email) {
      errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = 'Invalid email address.';
    }
    else{
      errors.email ='';
    }

    if (!values.password) {
      errors.password = 'Password is required.';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long.';
    }
    else{
      errors.password ='';
    }

    return errors;

  };

  const handleSubmit =(event=>{
    event.preventDefault();
    setErrors(validation(values));
    if(errors.uname === '' && errors.email === '' && errors.password ===''){
      axios.post('http://localhost:8081/reg',values)
      .then(res=>{
        console.log(res);
        navigate('/signin');
    }).catch(err=>console.log(err))

    }
  })
  return (
    <>
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <span className="navbar-brand mb-0 h1"> Car List</span>
        </div>
        </nav>
        <div className='d-flex vh-100 bg-warning justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-5'>
                <h2 className='text-danger'>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                <label htmlFor='uname'>User Name</label>
                <input type='text' className='form-control mb-2 w-100' name='uname' placeholder='Enter The Username' onChange={handleInput}/> 
                {errors.uname&& <span className='text-danger'>{errors.uname}</span>}
                <label htmlFor='email'>Email</label>
                <input type='text' className='form-control mb-2' name='email' placeholder='Enter The Email' onChange={handleInput}/> 
                {errors.email&& <span className='text-danger'>{errors.email}</span>}
                <label htmlFor='password'>Password</label>
                <input type='text' className='form-control mb-2' name='password' placeholder='Enter The Password' onChange={handleInput}/>
                {errors.password&& <span className='text-danger'>{errors.password}</span>}
                <button type='submit' className=' btn btn-primary btn-sm w-100'>Sign Up</button>
                </form>
                <Link to='/signin' className=' btn btn-danger btn-sm w-100 mt-2'> Sign In</Link>
            </div>
        </div>
    </>
  )
}

export default Signup
