import React, { useState, useContext } from "react";
import { Navbar,Nav } from "react-bootstrap";
function NavbarIPL(){
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
          <img
            src="https://png.pngitem.com/pimgs/s/127-1270088_ipl-10-logo-png-vivo-ipl-2019-logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="ipl logo"
          />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/players">Players</Nav.Link>
            <Nav.Link href="/matches">Matches</Nav.Link>
            <Nav.Link href="/average-strike-rates">Average strike rates</Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
}


export default NavbarIPL;