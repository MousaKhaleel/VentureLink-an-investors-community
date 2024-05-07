
import { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import { FaMedal } from "react-icons/fa";
import { CiBadgeDollar } from "react-icons/ci";
import { IoPeopleSharp } from "react-icons/io5";

import Deal from '../assets/pexels-andrea-piacquadio-926390.jpg'
import newImg from '../assets/tips-1.png'
import lastTip from '../assets/tips-2.png'

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

    return ( 
      <div>
            <HeroSection />
            {!name && <><div className="allBusinessContainer">
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
                <img src={Deal} width={'300px'}/>
              </div>
            
            <div className="textContainer">
              <h4>Have you ever dreamed of:</h4>
              <p>An online community of investors, where business sponsors around the world share ideas, experience, and struggle toward success with start-ups that have creative ideas in need of financial support and guidance, and help sponsors, and business owners to find common ground and to discover each other and start their business relationship and discuss expected future success, estimations and fishability studies. </p>
            </div>
      </div>
      
      <br/><br/><br/> <br/><br/><br/>

      <div class="separator">investing with details</div>
          <br/>

            <div className="flexedContainer">

              <div className="textContainerTwo">
                <h4>Understand Your Risk Tolerance</h4>
                <p> Assess your risk tolerance by considering factors such as your age, financial situation, and investment goals. Determine how much risk you're willing to take and choose investments that align with your risk tolerance.</p>
              </div>

                <div className="imageContainer">
                  <img src={newImg} width={'300px'}/>
                </div>
          </div>
      
      <br/><br/><br/> <br/><br/><br/>
      
      <div class="separator">Some Tips</div>

          <br/>
      
            <div className="flexedContainer">
                <div className="imageContainer">
                  <img src={lastTip} width={'300px'}/>
                </div>
              
              <div className="textContainer">
                <h4>Set Clear Financial Goals</h4>
                <p>Before you start investing, define your financial goals. Whether you're saving for retirement, a down payment on a house, or your children's education, having clear objectives will help guide your investment strategy.</p>
              </div>
          </div>

      <br/><br/><br/>

      <br/>
        <div class="separator">Why choose us?</div>
        <br/>
        <div className="whyUs">
        <div><h5 style={{textAlign:'center'}}>We provide you with:</h5> <br/></div>
          <div className="features">
              <p><SiFlyway /> Freedom</p>
              <p><MdOutlineSecurity /> Security</p>
              <p><GiStrong /> Reliability</p>

              
              <p><FaMedal /> speed fame</p>
              <p><CiBadgeDollar /> Profitability</p>
              <p><IoPeopleSharp /> Relationships</p>
          </div>
        </div>
      </main>
      </div>
     );
}

export default HomePage;
