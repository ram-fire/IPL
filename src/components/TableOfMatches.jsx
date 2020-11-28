import React from "react";

function TableOfMatches(props)
{
    return(
        <tr>
        <td>{props.records.Season}</td>
        <td>{props.records.date}</td>
        <td>{props.records.team1}</td>
        <td>{props.records.team2}</td>
        <td>{props.records.toss_winner}</td>
        <td>{props.records.toss_decision}</td>
        <td>{props.records.result}</td>
        <td>{props.records.dl_applied}</td>
        <td>{props.records.winner}</td>
        <td>{props.records.win_by_runs}</td>
        <td>{props.records.win_by_wickets}</td>
        <td>{props.records.player_of_match}</td>
        <td>{props.records.venue}</td>
        <td>{props.records.umpire1}</td>
        <td>{props.records.umpire2}</td>
        </tr>
    );
}
export default TableOfMatches;