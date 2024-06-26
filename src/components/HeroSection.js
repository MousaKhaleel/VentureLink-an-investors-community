import './mainStyle.css'
import backgroundImage from '../assets/pexels-rdne-stock-project-7414041.jpg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  const [name,setName]=useState(null)

//   useEffect(()=>{
//     try {
//       fetch('http://localhost:8000/profile',{
//         credentials:'include',
//         method:'GET'
//       }).then(res=>{
//         res.json().then(info=>{
//           setName(info.name)
//         })
//       },[])
//     } catch (error) {
//       console.log(error)
//     }
//     })
    return ( 
        <div
  lc-helper="background"
  className="container-fluid py-5 mb-4 d-flex justify-content-center"
  style={{
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderEndEndRadius:'4px',
    borderEndStartRadius:'4px'
  }}
>
  <div
    className="p-5 mb-4 lc-block col-7 col-8 col-11">
    <div className="lc-block">
      <div editable="rich">
        <h2 className="fw-bolder display-3" style={{color:'white'}}>Welcome to <span style={{color:'rgb(52, 114, 79)'}}>VentureLink</span></h2>
      </div>
    </div>
    <div className="lc-block col-md-8">
      <div editable="rich">
        <p className="lead" style={{color:'white'}}>
        A new way of investing
        </p>
      </div>
    </div>
    {!name && <div className="lc-block">
      <Link className="btn" to="/login" role="button" style={{background: 'rgb(52, 114, 79)', color:'white'}}>
        Let's start
      </Link>
    </div>}
    {name && <div className="lc-block">
      {/* <Link className="btn" to="/risefund" role="button" style={{background: 'rgb(52, 114, 79)', color:'white'}}>
        Let's start
      </Link> */}
    </div>}
  </div>
</div>
     );
}

export default HeroSection;