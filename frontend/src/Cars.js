import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
function Cars() {
    const [carmaodel,setcarmodel] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res=>setcarmodel(res.data))
        .catch(err=>console.log("Error"));
    },[])

    const handleDelete = async(id)=>{
        try{
            await axios.delete(`http://localhost:8081/rmcar/${id}`)
            window.location.reload()
        }catch(err){
            console.log("Error");
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
            <div className='w-50 bg-white rounded '>
                <Link to ='/create' className =" btn btn-success justify-content-left">Add New + </Link>
            
        <table className="table">
        <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Model</th>
            <th scope="col">Manufacturer</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                carmaodel.map((data,i)=>(
                    <tr key={i}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.type}</td>
                        <td><Link to={`/update/${data.id}`}className='btn btn-primary btn-sm'>Update</Link>
                            <button className='btn btn-danger btn-sm ms-3' onClick={ e=> handleDelete(data.id)}>Delete</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
        </table>
        </div>
        </div>

        </>
    );
}

export default Cars;
