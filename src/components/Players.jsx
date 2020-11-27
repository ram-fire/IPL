import React,{useState,useEffect} from "react";
import NavbarIPL from "./NavbarIPL";
import TableOfplayers from "./TableOfplayers"
function Players(){
    const [listOfRecords,setlistOfRecords]=useState([{
        name:"sachin tendulkar",
        batting_hand:"right hand",
        bowling_skill:"googly",
        country:"india",
        dob:"1980-05-03"
    }]);
    const [filter,Setfilter]=useState({
        name:"",
        batting_hand:"",
        bowling_skill:"",
        country:"",
        dob:""
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
        Setfilter({name:"",
        batting_hand:"",
        bowling_skill:"",
        country:"",
        dob:""})
    }
    return(
        <>
        <NavbarIPL/>
        <form onSubmit={onSubmitFilter} className="playerForm">
        <div className="playerName">
            <p>player name:</p>
            <input 
                onChange={handleChange} 
                name="name" 
                placeholder="player name" 
                value={filter.name}    
            />
            </div>
            <div className="battingHand">
            <p>select Batting Hand:</p>
                    <input onChange={handleChange} type="radio" id="right_hand" name="batting_hand" value="right_hand"/>
                    <label >Right Hand</label><br/>
                    <input onChange={handleChange}  type="radio" id="left_hand" name="batting_hand" value="left_hand"/>
                    <label >Left Hand</label><br/>
                    <input onChange={handleChange}  type="radio" id="all" name="batting_hand" value="all"/>
                    <label >All</label><br/>
            </div>  
            <div className="bowlingSkill">      
            <p>Choose bowling skill</p>
                <select onChange={handleChange}  name="bowling_skill" id="cars">
                    <option value="Right-arm medium">Right-arm medium</option>
                    <option value="Right-arm offbreak">Right-arm offbreak</option>
                    <option value="Legbreak googly">Legbreak googly</option>
                    <option value="Right-arm fast-medium">Right-arm fast-medium</option>
                    <option value="Legbreak">Legbreak</option>
                    <option value="Left-arm medium-fast">Left-arm medium-fast</option>
                    <option value="Slow left-arm orthodox">Slow left-arm orthodox</option> 
                    <option value="Left-arm medium">Left-arm medium</option>
                    <option value="all">All</option>
                </select><br/>
            </div>    
            <div className="dob">
                <p>DOB</p>
                <input onChange={handleChange}  type="date" id="birthday" name="dob"/>
            </div>
            <div className="country">
            <p>country:</p>    
            <input 
                onChange={handleChange} 
                name="country" 
                placeholder="country" 
                value={filter.country}    
            /> <br/>   
            </div>
            <div className="submit">
            <button type="submit">submit</button>
            </div>
        </form>
        <table border="2px" className="playerstable">
        <thead>
        <tr>
        <th>Player Name</th>
        <th>batting hand</th>
        <th>bowling skill</th>
        <th>DOB</th>
        <th>country</th>
        </tr>
        </thead>
        <tbody>
        {console.log(listOfRecords)}
        {listOfRecords.map((record,index)=>(
            <TableOfplayers
                key={index}
                records={record}
            />
        ))}
        </tbody>
        </table>   
        </>
    );
}

export default Players;