import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function CreateCars() {
    const [name,setName] = useState('')
    const [type,setType] = useState('')
    const navigate = useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/create',{name,type})
        .then(res=>{
            console.log(res);
            navigate('/');
        }).catch(err=>console.log(err))

    }
  return (
    <>
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <span className="navbar-brand mb-0 h1"> Car List</span>
        </div>
    </nav>
    <div className='d-flex vh-100 bg-warning justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded '>
            <h2 className='p-2'>Add New Car</h2>
            <form onSubmit={handleSubmit} className='p-4'> 
                <div className="form-group">
                    <label > Car Model</label>
                    <input type="Text" className="form-control" placeholder="Car Model Name"
                    onChange={e=>setName(e.target.value)}/>
                </div>
                <div className="form-group mt-2">
                    <label >Car Manufacture</label>
                    <input type="text" className="form-control"  placeholder="Manufacture Name"
                    onChange={e=>setType(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Add Car</button>
            </form>
        </div>
    </div>
</>
  )
}

export default CreateCars
