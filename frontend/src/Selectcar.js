import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Selectcar() {
    const [cars,setcars] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res=>setcars(res.data))
        .catch(err=>console.log("error"));
    })
  return (
    <div>
        <select>
            {
                cars.map((data,i)=>(
                    <option value={data.id} key={i}>
                        {data.name}
                    </option>
                ))
            }
        </select>
      Selectcar
    </div>
  )
}

export default Selectcar
