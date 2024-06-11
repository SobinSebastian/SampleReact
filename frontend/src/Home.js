import axios from 'axios'
import React,{useEffect}  from 'react'
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  const handleAuth =()=>{
    axios.get('http://localhost:8081/checkauth',{
      headers : {
        'access-token' : localStorage.getItem("token")
      }
    })
    .then(res => {
      if (res.data !== "successed"){
          navigate('/signin');
      }
    })
    .catch(err => console.log(err));
  }

  useEffect(() => {
    handleAuth();
  });
  
  return (
    <>
   <div className='bg-primary p-3 d-flex'>
      <span className='ps-5 text-warning fs-4 fw-bold'>CarList</span>
      {/* <span><nav className='navbar'><a className='navbarlink'>Home</a><a className='navbarlink'>blog</a></nav></span> */}
   </div>
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffd700" fill-opacity="1" d="M0,0L17.1,10.7C34.3,21,69,43,103,58.7C137.1,75,171,85,206,122.7C240,160,274,224,309,229.3C342.9,235,377,181,411,176C445.7,171,480,213,514,208C548.6,203,583,149,617,133.3C651.4,117,686,139,720,176C754.3,213,789,267,823,256C857.1,245,891,171,926,138.7C960,107,994,117,1029,106.7C1062.9,96,1097,64,1131,69.3C1165.7,75,1200,117,1234,133.3C1268.6,149,1303,139,1337,149.3C1371.4,160,1406,192,1423,208L1440,224L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"></path></svg>



    <button className='btn btn-success ms-5' onClick={handleAuth}>Hello</button>
    </>
  )
}

export default Home
