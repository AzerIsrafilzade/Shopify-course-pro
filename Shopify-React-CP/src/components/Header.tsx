import React, {useRef} from 'react'
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
// import { Link } from 'react-router-dom';

  const Header: React.FC = () => {

  const mobileMenyuDivi = useRef<HTMLDivElement>(null)
    


    const navbariAc = () => {
        //default olaraq true
        if(mobileMenyuDivi.current) {
            mobileMenyuDivi.current.classList.add("aktiv")
        }
    }


    const navbariBagla = () => {
        //default olaraq true
        if(mobileMenyuDivi.current) {
            mobileMenyuDivi.current.classList.remove("aktiv")
        }
    }


  return (
<>

{/* Mobile Menu Start */}

    <div className="mobile-menyu" ref={mobileMenyuDivi}>

    <IoMdClose onClick={navbariBagla} className="fa-regular fa-circle-xmark " />

    <nav className="mobile-nav-links ">
      <a href="">Start</a>
      <a href="">Sell</a>
      <a href="">Market</a>
      <a href="">Manage</a>
      <a href="">Pricing</a>
      <a href="">Learn</a>

      
       <div className="signin-section d-flex flex-column gap-3">
        <a href=""className="log-in btn text-center">Login</a>
        <a href=""className="navbar-btn btn nav-link text-center" id="start-free-trial">Start free trial</a>
      </div>
    </nav>
    
  </div>

  {/* Mobile Menu End */}

    <header className="header py-5">
    <div className="container">
      <div className="header">
        <img className="logo" src="./assets/images/header/logo.svg" alt=""/>
        <nav className="nav-links-left d-none d-lg-flex">
          <a href="">Start</a>
          <a href="">Sell</a>
          <a href="">Market</a>
          <a href="">Manage</a>
          <a href="">Pricing</a>
          <a href="">Learn</a>
        </nav>

        <HiMiniBars3BottomRight onClick={navbariAc} className='fa-bars-staggered d-flex d-md-none' />
       
       <div className="start-free-trial">
        <button className="Log-in d-none d-lg-block">Log in</button>
        <button className="Start-free-trial d-none d-lg-block" id="start-free-trial">Start free trial</button>
       </div>
        
      </div>
    </div>
  </header>
  </>
  )
}

export default Header

