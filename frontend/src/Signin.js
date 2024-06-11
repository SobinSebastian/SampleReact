import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signin() {
  const navigate = useNavigate();
  const [values,setValues] = useState({
    'email' :'',
    'password' :''
  })
  const [errors,setErrors] = useState({})

  function validation (values){
    const errors = {};
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

  const handleInput=(event)=>{

      const { name, value } = event.target;
      setValues((prev) => ({ ...prev, [name]: value }));
    };
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    setErrors(validation(values))
    if(errors.email === '' && errors.password ===''){
      axios.post('http://localhost:8081/login',values)
      .then(res=>{
        if(res.data.Login){

          localStorage.setItem("token",res.data.token);
          navigate('/home');
        }
        else{
          alert(res.data);
        }

      }).catch(err=>console.log("Error"))
    }
  }
  return (
    <>
       <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <span className="navbar-brand mb-0 h1"> Car List</span>
        </div>
        </nav>
        <div className='d-flex vh-100 bg-warning justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-5'>
              <form action='' onSubmit={handleSubmit}> 
                <label htmlFor='email'>Email</label>
                <input type='text' className='form-control mb-2' onChange={handleInput} name='email'/> 
                {errors.email&&<span className='text-danger'>{errors.email}</span>}<br></br>
                <label htmlFor='password'>Password</label>
                <input type='text' className='form-control mb-2' onChange={handleInput} name='password'/>
                {errors.password && <span className='text-danger'>{errors.password}</span>}
                <input type='submit' className=' btn btn-primary btn-sm w-100' value="Signin"/>
                </form>
            </div>
        </div>
    </>
  )
}

export default Signin
