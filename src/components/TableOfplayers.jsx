import React from "react";

function TableOfPlayers(props)
{
    return(
        <tr>
        <td>{props.records.name}</td>
        <td>{props.records.batting_hand}</td>
        <td>{props.records.bowling_skill}</td>
        <td>{props.records.dob}</td>
        <td>{props.records.country}</td>
        </tr>
    );
}
export default TableOfPlayers;