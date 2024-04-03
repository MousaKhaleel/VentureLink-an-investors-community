import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import Logo2 from '../assets/4X9uRk-LogoMakr.png';
import './mainStyle.css'
import './footerStyle.css'

function Footer() {
    return ( 
        <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Help</h3>
                        <ul>
                            <li><a href="/aboutus">Help center</a></li>
                            <li><a href="/aboutus">Call us</a></li>
                            <li><a href="/aboutus">How to start</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="/aboutus">Company</a></li>
                            <li><a href="/aboutus">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                    {/* <a href="/" >
                        <img src={Logo2} width={'200px'}/></a> */}
                        <p>A new way of investing</p>
                    </div>
                    <div className="col item social"><a href="https://www.linkedin.com/in/mousa-khaleel/"><FaLinkedinIn /></a><a href="https://github.com/MousaKhaleel"><FaGithub /></a><a href="https://jo.linkedin.com/in/yazeed-fayoumi"><FaLinkedinIn /></a><a href="https://github.com/YazeedFayoumi"><FaGithub /></a></div>
                </div>
                <p className="copyright">VentureLink Inc. © 2024</p>
            </div>
        </footer>
    </div>
     );
}

export default Footer;