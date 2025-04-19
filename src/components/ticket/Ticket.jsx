import React from 'react';
import "./Ticket.css";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { assests } from '../../assets/images/assests';
const Ticket = () => {
  const location = useLocation();
  const name = location.state?.name || 'Guest';
  const email = location.state?.email || '@mail';
  const icon = location.state?.icon;

  return (
    <div>
      <div className="mainbg" style={{ backgroundImage: `url(${assests.bgmain})` }}>
          <div className="logo">
                  <img src={assests.logo} alt="" />
            </div>
            <div className="text_container">
          <h1 style={{ textAlign: "center", fontSize: "50px" }}>Congrats, {name}!<br /></h1>
          <p style={{ textAlign: "center", opacity: "100%", marginTop: "10px",fontSize: "50px" }}>Your ticket is ready</p>
        </div>
        <div className="text_container2">
        <h3 style={{textAlign:"center"}}>We've emailed your ticket to 
            <br/><span>{email}</span><br />and will send updates in the run up to the event.</h3>
        </div>
        <div className="ticket" >
            <img src={assests.ticket} alt="" />
            <div className="textcontainer3">
                <img src={assests.smalllogo} alt="" id='small_logo' />
                <div className="para">
                <h2 style={{textAlign:"center",fontSize:"35px"}}>Coding Conf</h2>
                <p>Jan 31, 2025 / Austin, TX</p>
                </div>
                <div className="name">
                    <img src={icon || assests.icon} alt="" id='icon'/>
                    <div className="info">
                    <h1>{name}</h1>
                    <h3>{email}</h3>
                    </div>
                        
                </div>
                
            </div>
        </div>


      </div>
    </div>
  )
}

export default Ticket
