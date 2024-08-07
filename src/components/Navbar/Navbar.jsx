import React, { useState } from "react";
import logo from "../../imgs/slack.svg";
import './navbar.css';
import { IoSearchOutline } from "react-icons/io5";
// import { navdata } from "../../data/Data";
import profile from '../../imgs/profile.png'

import { MdEmail } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
function Navbar() {

  return (
	<nav className="navbar">
	<div className="logoSearch">
		<div className="navbar-logo"><img src={logo} alt="" /></div>
		<form id="form" role="search">
		<button className="search-button"><IoSearchOutline /></button>
			<input type="search"  placeholder="Search..." />
		</form>
	</div>
	<div className="profilebar">
			<div className="icon" >
				<div><MdEmail/></div>
				<div><IoSettingsOutline/></div>
				<div className="parentNotic"><IoMdNotificationsOutline /><span className="notific"></span></div>
				<div><img src={profile} alt="" /></div>
			</div>
		
	</div>
	
  </nav>
  );
}

export default Navbar;
