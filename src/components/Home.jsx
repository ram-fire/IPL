import React from "react";
import NavbarIPL from "./NavbarIPL";
import Teams from "./Teams";

function Players(){
    return(
        <div className="container">
           <NavbarIPL/>
           <Teams />
        </div>
    );
}

export default Players;