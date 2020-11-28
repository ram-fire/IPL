import React from "react";

function TableOfPlayers(props)
{
    return(
        <tr>
        <td>{props.records.Player_Name}</td>
        <td>{props.records.Batting_Hand}</td>
        <td>{props.records.Bowling_Skill}</td>
        <td>{props.records.DOB}</td>
        <td>{props.records.Country}</td>
        </tr>
    );
}
export default TableOfPlayers;