import React ,{useState,useEffect} from "react";
import NavbarIPL from "./NavbarIPL";
import TableSR from "./TableSR";
function AverageSR(){
    const [listOfRecords,setlistOfRecords]=useState([{
        name:"sachin tendulkar",
        total_runs:"5000",
        out:"100",
        Number_of_balls:"3500",
        average:"45",
        strike_rate:"142.857"

    }]);
    const [filter,Setfilter]=useState({
        name:"",
        total_runs:"",
        out:"",
        Number_of_balls:"",
        average:"",
        strike_rate:""
    });
    useEffect(()=>{
        //setlistOfRecords(results.data);
      });
    function handleChange(event){
        const {name,value}=event.target; 
        Setfilter(previousValue=>{
            return {
                ...previousValue,
                [name]:value
            }
        });
    }
    function onSubmitFilter(event){
        event.preventDefault();
        console.log(filter);
        Setfilter({
            name:"",
            total_runs:"",
            out:"",
            Number_of_balls:"",
            average:"",
            strike_rate:""
        })
    }
    return(
        <>
        <NavbarIPL/>
        <form onSubmit={onSubmitFilter} className="playerForm">
        <div className="inputarea">
            <p>player name:</p>
            <input 
                onChange={handleChange} 
                name="name" 
                placeholder="player name" 
                value={filter.name}    
            />
            </div>
        <div className="inputarea">
            <p>runs:</p>
            <input 
                onChange={handleChange} 
                name="total_runs" 
                placeholder="total_runs" 
                value={filter.total_runs}    
            />
            </div>
            <div className="inputarea">
            <p>out:</p>
            <input 
                onChange={handleChange} 
                name="out" 
                placeholder="out" 
                value={filter.out}    
            />
            </div>
            <div className="inputarea">
            <p>Number of balls:</p>
            <input 
                onChange={handleChange} 
                name="Number_of_balls" 
                placeholder="Number of balls" 
                value={filter.Number_of_balls}    
            />
            </div> 
            <div className="inputarea">
            <p>Average:</p>
            <input 
                onChange={handleChange} 
                name="average" 
                placeholder="average" 
                value={filter.average}    
            />
            </div>
            <div className="inputarea">
            <p>Strike rate:</p>
            <input 
                onChange={handleChange} 
                name="strike_rate" 
                placeholder="Strike rate" 
                value={filter.strike_rate}    
            />
            </div>
            <div className="submit">
            <button type="submit">submit</button>
            </div>     
        </form>
        <table border="2px" className="averageSRtable">
        <thead>
        <tr>
        <th>Player Name</th>
        <th>Total runs</th>
        <th>out</th>
        <th>Number Of balls</th>
        <th>average</th>
        <th>Strike Rate</th>
        </tr>
        </thead>
        <tbody>
        {console.log(listOfRecords)}
        {listOfRecords.map((record,index)=>(
            <TableSR
                key={index}
                records={record}
            />
        ))}
        </tbody>
        </table>   
        </>
    );
}

export default AverageSR;