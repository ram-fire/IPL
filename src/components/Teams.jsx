import React from "react";
import TeamCard from "./TeamCard";
import teamsArray from "./teamsArray";
function Teams(){
    return (
        <div className="team-card-container">
                {teamsArray.map(team=>(
                    <TeamCard records={team}/>
                ))}
        </div>        
    );
}
export default Teams;