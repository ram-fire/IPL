import React from "react";

function TableSR(props)
{
    return(
        <tr>
        <td>{props.records.name}</td>
        <td>{props.records.total_runs}</td>
        <td>{props.records.out}</td>
        <td>{props.records.Number_of_balls}</td>
        <td>{props.records.average}</td>
        <td>{props.records.strike_rate}</td>
        </tr>
    );
}
export default TableSR;