import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
    const [name,setName] = useState('')
    const [type,setType] = useState('')
    const navigate = useNavigate();
    const {id} =useParams();
    function handleSubmit(event){
        event.preventDefault();
        axios.put(`http://localhost:8081/carupdate/${id}`,{name,type})
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
        <h2 className='p-2'>Update Car</h2>
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
                <button type="submit" className="btn btn-primary mt-3">Update1 Car</button>
            </form>
        </div>
    </div>
</>
  )
}

export default Update
