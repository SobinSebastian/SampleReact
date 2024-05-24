import React from 'react'
import { Link } from 'react-router-dom'


function Signup() {
  return (
    <>
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <span className="navbar-brand mb-0 h1"> Car List</span>
        </div>
        </nav>
        <div className='d-flex vh-100 bg-warning justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-5'>
                <label htmlFor='email'>Email</label>
                <input type='text' className='form-control mb-2'/> 
                <label htmlFor='name'>Password</label>
                <input type='text' className='form-control mb-2'/>
                <button type='submit' className=' btn btn-primary btn-sm w-100'>Sign Up</button>
                <Link to='/signin' className=' btn btn-danger btn-sm w-100 mt-2'> Sign In</Link>
            </div>
        </div>
    </>
  )
}

export default Signup
