import React from "react";

function CARD (props){
        return ( 
            <>
        <div className="cards">
            <div className="card">
                <img src={props.url} alt="myimage" className="card__image"/>
                <div className="card__info">
                    <span className="card__category"><h5>{props.title}</h5></span>
                </div>
            </div>
        </div>
        </>
        );
}
export default CARD;