import React from "react";
import { ReactComponent as MatchIcon } from "./icons/match.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

