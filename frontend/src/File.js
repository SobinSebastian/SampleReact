import axios from 'axios';
import React, { useEffect, useState } from 'react'

function File() {
    const [imgs,setImgs] = useState();
    const[file,setFile] = useState([]);
    const handlefile=(e)=>{
        setFile (e.target.files[0]);
    }

    const handleSubmit=()=>
        {
            const formdata = new FormData();
            formdata.append('image',file);
            axios.post('http://localhost:8081/uploads',formdata)
            .then(res=>{
                console.log(res);
            }).catch(err=>console.log(err))
        }

    useEffect(()=>{
        axios.get('http://localhost:8081/imv')
        .then(res=>setImgs(res.data))
        .catch(err=>console.log("Error"));
    },[])

  return (
    <>
    <div className='container'>
        GNBHDA
        <input type='file' onChange={handlefile}/>
        <button className='btn btn-primary' onClick={handleSubmit}> Upload</button> 
    </div>
    {imgs}
    <img src={`http://localhost:8081/images/`+imgs.images[1]}/>
    </>
  )
}

export default File
