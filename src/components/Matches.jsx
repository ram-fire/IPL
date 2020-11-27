import React,{useState,useEffect} from "react";
import NavbarIPL from "./NavbarIPL";
import TableOfMatches from "./TableOfMatches";
function Matches(){
    const [listOfRecords,setlistOfRecords]=useState([{
        season:"2019",
        city:"hyderabad",
        date:"2019-05-03",
        team1:"Royal Challengers Bangalore",
        team2:"Rising Pune Supergiant",
        toss_winner:"Royal Challengers Bangalore",
        toss_decision:"field",
        result:"normal",
        dl_applied:"0",
        winner:"Rising Pune Supergiant",
        win_by_runs:"35",
        win_by_wickets:"0",
        player_of_match:"M.S. Dhoni",
        venue:"Rajiv Gandhi International Stadium, Uppal"
    }]);
    const [filter,Setfilter]=useState({
        season:"",
        city:"",
        date:"",
        team1:"",
        team2:"",
        toss_winner:"",
        toss_decision:"",
        result:"",
        dl_applied:"",
        winner:"",
        win_by_runs:"",
        win_by_wickets:"",
        player_of_match:"",
        venue:""
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
            season:"",
        city:"",
        date:"",
        team1:"",
        team2:"",
        toss_winner:"",
        toss_decision:"",
        result:"",
        dl_applied:"",
        winner:"",
        win_by_runs:"",
        win_by_wickets:"",
        player_of_match:"",
        venue:""
        })
    }
    return(
            <>
            <NavbarIPL/>
            <form onSubmit={onSubmitFilter} className="playerForm">
            <div className="dd">      
                <p>season</p>
                    <select onChange={handleChange}  name="season">
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option> 
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option> 
                        <option value="2008">2008</option>
                    </select><br/>
            </div>   
            <div className="inputarea">
                <p>city:</p>
                <input 
                    onChange={handleChange} 
                    name="city" 
                    placeholder="city" 
                    value={filter.city}    
                />
            </div>
            <div className="inputarea">
                    <p>Date</p>
                    <input onChange={handleChange}  type="date" id="date" name="date"/>
            </div>
            <div className="inputarea">
                <p>team1:</p>
                <input 
                    onChange={handleChange} 
                    name="team1" 
                    placeholder="team1" 
                    value={filter.team1}    
                />
            </div>
            <div className="inputarea">
                <p>team2:</p>
                <input 
                    onChange={handleChange} 
                    name="team2" 
                    placeholder="team2" 
                    value={filter.team2}    
                />
            </div>
            <div className="inputarea">
                <p>toss winner:</p>
                <input 
                    onChange={handleChange} 
                    name="toss_winner" 
                    placeholder="toss_winner" 
                    value={filter.toss_winner}    
                />
            </div>
            <div className="dd">      
                <p>toss decision</p>
                    <select onChange={handleChange}  name="toss_decision">
                        <option value="field">field</option>
                        <option value="bat">bat</option>
                    </select><br/>
            </div>    
            <div className="dd">      
                <p>Result</p>
                    <select onChange={handleChange}  name="result">
                        <option value="normal">Noramal</option>
                        <option value="tie">Tie</option>
                    </select><br/>
            </div>
            <div className="dd">      
                <p>dl applied</p>
                    <select onChange={handleChange}  name="dl_applied">
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select><br/>
            </div>
            <div className="inputarea">
                <p>winner:</p>
                <input 
                    onChange={handleChange} 
                    name="winner" 
                    placeholder="winner" 
                    value={filter.winner}    
                />
            </div>
            <div className="inputarea">
                <p>win by runs:</p>
                <input 
                    onChange={handleChange} 
                    name="win_by_runs" 
                    placeholder="win by runs" 
                    value={filter.win_by_runs}    
                />
            </div>
            <div className="inputarea">
                <p>win by wickets:</p>
                <input 
                    onChange={handleChange} 
                    name="win_by_wickets" 
                    placeholder="win by wickets" 
                    value={filter.win_by_wickets}    
                />
            </div>    
            <div className="inputarea">
                <p>player of match :</p>
                <input 
                    onChange={handleChange} 
                    name="player_of_match" 
                    placeholder="player of match" 
                    value={filter.player_of_match}    
                />
            </div> 
            <div className="inputarea">
                <p>venue :</p>
                <input 
                    onChange={handleChange} 
                    name="venue" 
                    placeholder="venue" 
                    value={filter.venue}    
                />
            </div>   
            <div className="inputarea">
                <p>umpire 1 :</p>
                <input 
                    onChange={handleChange} 
                    name="umpire1" 
                    placeholder="umpire1" 
                    value={filter.umpire1}    
                />
            </div> 
            <div className="inputarea">
                <p>umpire2 :</p>
                <input 
                    onChange={handleChange} 
                    name="umpire2" 
                    placeholder="umpire2" 
                    value={filter.umpire2}    
                />
            </div>
            <div className="submit">
            <button type="submit">submit</button>
            </div>         
            </form>
            <table border="2px" className="matchestable">
            <thead>
            <tr>
            <th>Season</th>
            <th>date</th>
            <th>team1</th>
            <th>team2</th>
            <th>toss winner</th>
            <th>toss decision</th>
            <th>reesult</th>
            <th>dl applied</th>
            <th>winner</th>
            <th>win by runs</th>
            <th>win by wickets</th>
            <th>player of match</th>
            <th>venue</th>
            <th>umpire 1</th>
            <th>umpire 2</th>
            </tr>
            </thead>
            <tbody>
            {listOfRecords.map((record,index)=>(
                <TableOfMatches
                    key={index}
                    records={record}
                />
            ))}
            </tbody>
            </table>   
            </>
    );
}

export default Matches;