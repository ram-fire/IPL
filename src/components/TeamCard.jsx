import React from "react";
function TeamCard(props)
{
    return (
        
			<div className="team-card">
				<img src={props.records.url} alt="image"/>
				<div className="team-name">{props.records.teamName}</div>
			</div>
    );
}
export default TeamCard;

