
// import coolDefault from '../assets/avatar/profile-42914_1280.png'
// import coolerDefault from '../assets/avatar/facebook_default_picture_by_adnac_d2r2hul-fullview1.jpg'
import { Link } from 'react-router-dom';
import "./mainStyle.css"

function AboutUs() {
    return ( 
        <div className="container">
        <h1 style={{marginTop:'1%'}}>Who are we?</h1>
        <div className="teamContainer">
            <div className="card" style={{ maxWidth: "18rem" }}>
  {/* <img className="card-img-top" src={coolerDefault} alt="MK" /> */}
  <div className="card-body">
    <p className="card-text">
    Founder, CEO: Mousa Khaleel
    </p>
  </div>
</div>
<div className="card" style={{ maxWidth: "18rem" }}>
  {/* <img className="card-img-top" src={coolDefault} alt="YF" /> */}
  <div className="card-body">
    <p className="card-text">
    Co-Founder, CTO: Ahmad Aldrbea
    </p>
  </div>
</div>
<div className="card" style={{ maxWidth: "18rem" }}>
  {/* <img className="card-img-top" src={coolDefault} alt="YF" /> */}
  <div className="card-body">
    <p className="card-text">
    COO: Yazeed Fayoumi
    </p>
  </div>
</div>
<div className="card" style={{ maxWidth: "18rem" }}>
  {/* <img className="card-img-top" src={coolDefault} alt="YF" /> */}
  <div className="card-body">
    <p className="card-text">
    CFO: Mohammad hilal
    </p>
  </div>
</div>
<div className="card" style={{ maxWidth: "18rem" }}>
  {/* <img className="card-img-top" src={coolDefault} alt="YF" /> */}
  <div className="card-body">
    <p className="card-text">
    CMO: Mohammad alzouabi
    </p>
  </div>
</div>
</div>
<hr/>
<p style={{marginBlock:'2%',background:'rgb(247,247,247)', padding:'2%',borderRadius:'4px'}}>temp
<br/>
<br/>
Thank you for being a part of our community.
<br/>
<span style={{color:'gery'}}><Link to='/'>VentureLink</Link></span> Inc.
</p>
<div>
<hr/>
<br/>
<div className="accordion accordion-flush" id="accordionFlushExample">
<h2>FAQs:</h2>
<br/>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseOne"
        aria-expanded="false"
        aria-controls="flush-collapseOne"
      >
        temp
      </button>
    </h2>
    <div
      id="flush-collapseOne"
      className="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
      data-bs-parent="#accordionFlushExample"
    >
      <div className="accordion-body">
      temp
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseTwo"
        aria-expanded="false"
        aria-controls="flush-collapseTwo"
      >
        How can i communicate with support?
      </button>
    </h2>
    <div
      id="flush-collapseTwo"
      className="accordion-collapse collapse"
      aria-labelledby="flush-headingTwo"
      data-bs-parent="#accordionFlushExample"
    >
      <div className="accordion-body">
        Email us at: mousakhaleel22@gmail.com
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseThree"
        aria-expanded="false"
        aria-controls="flush-collapseThree"
      >
        temp
      </button>
    </h2>
    <div
      id="flush-collapseThree"
      className="accordion-collapse collapse"
      aria-labelledby="flush-headingThree"
      data-bs-parent="#accordionFlushExample"
    >
      <div className="accordion-body">
        temp
      </div>
    </div>
  </div>
</div>

</div>
        </div>
     );
}

export default AboutUs;
