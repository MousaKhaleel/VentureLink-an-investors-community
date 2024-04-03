
import { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import Deal from '../assets/pexels-andrea-piacquadio-926390.jpg'
import './mainStyle.css'
import { MdOutlineSecurity } from "react-icons/md";
import { SiFlyway } from "react-icons/si";
import { GiStrong } from "react-icons/gi";
import { Link } from 'react-router-dom';
import BusinessList from "./BusinessList";

function HomePage() {
  const [id,setId]=useState(null)
  const[Business,setBusiness]=useState('');
  const[allBusiness,setAllBusiness]=useState('');
  const[name,setName]=useState(null);
  const[loading,setLoading]=useState(false);
  const[allLoading,setAllLoading]=useState(false);

//   useEffect(()=>{
//     fetch('http://localhost:8000/profile',{
//       credentials:'include',
//       method:'GET'
//     }).then(res=>{
//       res.json().then(info=>{
//         setId(info.id)
//         setName(info.name)
//       })
//     },[])
//     })

// useEffect(() => {
//   setAllLoading(true)
//   fetch("http://localhost:8000/allBusinesses")
//     .then((res) => res.json())
//     .then((data) => {setAllBusiness(data); setAllLoading(false)})
//     .catch((error) => console.error(error));
// }, []);

    return ( 
      <div>
            <HeroSection />
            {!name && <>
              <div className="allBusinessContainer">
      <main>
      {allBusiness && <h1>All Business, <Link to="/login">LogIn</Link> to see yours here!</h1>}
       {allLoading && <h2 className="hl">Loading...</h2>}
       {/* <hr/> */}
      {allBusiness && <BusinessList Business={allBusiness}/>}
      </main>
      </div>
            </> }
      <main>{name && <>
      {loading && <h2 className="hl">Loading...</h2>}
      {Business && <h1>Your Business, <Link  to="/profiledetails" style={{color:'rgb(52, 114, 79)'}}>{name}</Link>.</h1>}
      {/* <hr/> */}
      {Business && <BusinessList Business={Business} />}
      </>}
      <br/>
        <div class="separator">What to invest?</div>
        <br/>
      <div className="flexedContainer">
      <div className="imageContainer">
        <img src={Deal} width={'300px'}/></div>
        <div className="textContainer">
        <h4>Have you ever dreamed of...</h4>
        <p>An online community of investors, where business sponsors around the world share ideas, experience, and struggle toward success with start-ups that have creative ideas in need of financial support and guidance, and help sponsors, and business owners to find common ground and to discover each other and start their business relationship and discuss expected future success, estimations and fishability studies. </p>
      </div>
      </div>
      <br/>
        <div class="separator">Why choose us?</div>
        <br/>
        <div className="whyUs">
        <div><h5 style={{textAlign:'center'}}>We provide you with:</h5> <br/></div>
        <div className="features">
          <p><SiFlyway /> Freedom</p>
          <p><MdOutlineSecurity /> Security</p>
          <p><GiStrong /> Reliability</p>
          </div>
        </div>
      </main>
      </div>
     );
}

export default HomePage;
