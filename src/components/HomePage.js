
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
       <hr/>
      {allBusiness && <BusinessList Business={allBusiness}/>}
      </main>
      </div>
            </> }
      <main>{name && <>
      {loading && <h2 className="hl">Loading...</h2>}
      {Business && <h1>Your Business, <Link  to="/profiledetails" style={{color:'rgb(42, 89, 63)'}}>{name}</Link>.</h1>}
      <hr/>
      {Business && <BusinessList Business={Business} />}
      </>}
      <br/>
        <div class="separator">What to share your experience?</div>
        <br/>
      <div className="flexedContainer">
      <div className="imageContainer">
        <img src={Deal} width={'300px'}/></div>
        <div className="textContainer">
        <h4>temp.</h4>
        <p>temp.</p>
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
