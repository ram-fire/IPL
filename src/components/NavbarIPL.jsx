import React, { useState, useContext } from "react";
import {Link} from "react-router-dom";
function NavbarIPL() {
	return (
		<>
			<div className='navbar'>
				<div className='logo-container'>
					<img src='' alt='IPL' id='ipl-main-logo' />
				</div>
				<div className='nav-links-container'>
					<div className='nav-link teams'>
						<div className='nav-link-icon'></div>
						<span className='nav-link-name'><Link to="/" style={{
                        color: "#ffffff",
						textDecoration :"none"
                        }}>Teams</Link></span>
					</div>
					<div className='nav-link players'><Link to="/players" style={{
                        color: "#ffffff",
						textDecoration :"none"
                        }}>Players</Link>
					</div>
					<div className='nav-link matches'><Link to="/matches" style={{
                        color: "#ffffff",
						textDecoration :"none"
                        }}>Matches</Link></div>
					<div className='nav-link statistics'><Link to="/stats" style={{
                        color: "#ffffff",
						textDecoration :"none"
                        }}>Statistics</Link></div>
				</div>
			</div>
		</>
	);
}

export default NavbarIPL;
