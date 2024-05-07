import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import Logo2 from '../assets/4X9uRk-LogoMakr.png';
import './mainStyle.css'
import './footerStyle.css'

function Footer() {
    return ( 
        <footer className="footer">
        <div className="box-container">
          <div className="info">
            <h3>Overview: </h3>
            <p> 
            An online community of investors, where business sponsors around the world share ideas, experience, and struggle toward success with start-ups that have creative ideas in need of financial support and guidance
            </p>
          </div>
          <div className="box">
            <h3>Constructors: </h3>
            <a target="_blank" href="">Ahmed Al Drabea </a>
            <a target="_blank" href="https://www.linkedin.com/in/mousa-khaleel/">Mousa Khaleel </a>
            <a target="_blank" href="https://www.linkedin.com/in/yazeed-fayoumi/">Yazeed Al Fayoumi </a>
            <a target="_blank" href="https://github.com/mohammadalzoubi1">Muhammad Al-Zoubi </a>
            <a target="_blank" href="https://www.linkedin.com/in/mohammad-hilal-949561269/">Muhammad Hilal </a>
          </div>
          <div className="box">
            <h3>contact us: </h3>
            <a href="#">Suggestions?</a>
            <a target="_blank" href="https://web.whatsapp.com/+962 785266266">+962 785266266 </a>
            <a target="_blank" href="mailto:seahmednail@gmail.com">seahmednail@gmail.com</a>
          </div>
          <div className="box">
            <h3>sponsor us: </h3>
            <input type="email" placeholder="enter your email..." />            
          </div>
        </div>
        <div className="credit">
          <p>
            {" "}
            <span> Venture Link </span> - 2024 | all rights reserved!
          </p>
        </div>
      </footer>
    );
}

export default Footer;