import React, { useContext } from 'react';
import Logo from '../assets/6wOSCg-LogoMakr.png';
import { FaHome } from "react-icons/fa";
import { IoBusiness } from "react-icons/io5";
import { HiIdentification } from "react-icons/hi";
import { MdAccountCircle } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdAccountBox } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { IoMdLogIn } from "react-icons/io";
import { TbWritingSign } from "react-icons/tb";
import { UserContext } from './LogIn';

function NavBar() {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: 'rgb(00, 00, 00)' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="" width="40" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/"><FaHome /> Home</a>
            </li>
            {user && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/allbusinesses"><IoBusiness /> All Businesses</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/profile"><MdAccountCircle /> Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/aboutus"><HiIdentification /> About us</a>
                </li>
              </>
            )}
            {!user && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/allbusinesses"><IoBusiness /> All Businesses</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login"><MdAccountCircle /> Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/aboutus"><HiIdentification /> About us</a>
                </li>
              </>
            )}
          </ul>
          {user && (
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{background:'rgb(52, 114, 79)',color:'white',borderRadius:'2px'}}>
                  <MdAccountBox /> {user.name}
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" onClick={handleLogout} href="/"><IoIosLogOut /> Log out</a></li>
                </ul>
              </li>
            </ul>
          )}
          {!user && (
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/login" style={{background:'rgb(52, 114, 79)',color:'white',borderRadius:'2px'}}><IoMdLogIn /> Login</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
