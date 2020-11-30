import React from "react";

function TableSR(props)
{
    return(
        <tr>
        <td>{props.records.batsman}</td>
        <td>{props.records.total_runs}</td>
        <td>{props.records.out}</td>
        <td>{props.records.numberofballs}</td>
        <td>{props.records.average}</td>
        <td>{props.records.strikerate}</td>
        </tr>
    );
}
export default TableSR;