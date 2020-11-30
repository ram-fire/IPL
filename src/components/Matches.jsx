import React, { useState, useEffect } from "react";
import NavbarIPL from "./NavbarIPL";
import axios from "axios";
import MatchCard from "./MatchCard";
import { ReactComponent as Loader } from "./icons/loader.svg";
function Matches() {
    const [listOfRecords, setlistOfRecords] = useState([]);
    const [loadDone,SetloadDone]=useState(0);
    const [filter, Setfilter] = useState({
        Season:"",
        city: "",
        date: "",
        team1: "",
        team2: "",
        toss_winner: "",
        toss_decision: "",
        result: "",
        dl_applied: "",
        winner: "",
        win_by_runs: "",
        win_by_wickets: "",
        player_of_match: "",
        venue: "",
        umpire: "",
    });
    useEffect(async ()=>{
        SetloadDone(0);
        const response = await axios.post('http://localhost:5000/matches',filter);
        setlistOfRecords(response.data);
        SetloadDone(1);
        },[filter]);
    async function handleChange(event) {
        const { name, value } = event.target;
        await Setfilter(previousValue => {
            return {
                ...previousValue,
                [name]: value
            }
        });
    }
    function onSubmitFilter(event) {
        event.preventDefault();
        console.log(filter);
    }
    return (
        <div className='container'>
            <NavbarIPL />

            <div className='filter-form-container matches-form-container'>
                <div className='filter-form matches-form'>
                    <div className='input-field'>
                        <label htmlFor='Season'>IPL Season: </label>
                        <select onChange={handleChange} name="Season" id='Season' value={filter.Season}>
                        <option value="all">All</option>
                        <option value="IPL-2019">2019</option>
                        <option value="IPL-2018">2018</option>
                        <option value="IPL-2017">2017</option>
                        <option value="IPL-2016">2016</option>
                        <option value="IPL-2015">2015</option>
                        <option value="IPL-2014">2014</option>
                        <option value="IPL-2013">2013</option> 
                        <option value="IPL-2012">2012</option>
                        <option value="IPL-2011">2011</option>
                        <option value="IPL-2010">2010</option>
                        <option value="IPL-2009">2009</option> 
                        <option value="IPL-2008">2008</option>
                        </select>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='city'>City: </label>
                        <input
                            type='text'
                            name='city'
                            id='city'
                            placeholder='New Delhi'
                            onChange={handleChange}
                            value={filter.city}
                        />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='team-1'>Team 1: </label>
                        <input
                            type='text'
                            name='team1'
                            id='team-1'
                            placeholder='Mumbai Indian'
                            onChange={handleChange}
                            value={filter.team1}
                        />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='team-2'>Team 2: </label>
                        <input
                            type='text'
                            name='team2'
                            id='team-2'
                            placeholder='Chennai Super King'
                            onChange={handleChange}
                            value={filter.team2}
                        />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='toss-winner'>Toss Winner: </label>
                        <input
                            type='text'
                            name='toss_winner'
                            id='toss-winner'
                            placeholder='Chennai Super King'
                            onChange={handleChange}
                            value={filter.toss_winner}
                        />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='toss-decision'>toss decision: </label>
                        <select onChange={handleChange} name="toss_decision" id="toss-decision" value={filter.toss_decision}>
                            <option value="both">Both</option>
                            <option value="field">Field</option>
                            <option value="bat">Bat</option>
                        </select>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='result'>Match Result: </label>
                        <select onChange={handleChange} name="result" id='result' value={filter.result}>
                            <option value="both">Both</option>
                            <option value="normal">Normal</option>
                            <option value="tie">Tie</option>
                        </select>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='dl-applied'>Dl applied ?: </label>
                        <select onChange={handleChange} name="dl_applied" id='dl-applied' value={filter.dl_applied}>
                            <option value="3">both</option>
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='winner'>Winner : </label>
                        <input
                            type='text'
                            name='winner'
                            id='winner'
                            placeholder='Royal Challanger Banglore'
                            onChange={handleChange}
                            value={filter.winner}
                        />
                    </div>
                    {/* <div className='input-field'>
                        <label htmlFor='win-by-runs'>win_by_runs : </label>
                        <input
                            type='text'
                            name='win_by_runs'
                            id='win-by-runs'
                            placeholder='50'
                            onChange={handleChange}
                            value={filter.win_by_runs}
                        />
                    </div> */}
                    {/* <div className='input-field'>
                        <label htmlFor='win-by-wickets'>win_by_wickets : </label>
                        <input
                            type='text'
                            name='win_by_wickets'
                            id='win-by-wickets'
                            placeholder='4'
                            onChange={handleChange}
                            value={filter.win_by_wickets}
                        />
                    </div> */}
                    <div className='input-field'>
                        <label htmlFor='player-of-match'>player_of_match : </label>
                        <input
                            type='text'
                            name='player_of_match'
                            id='player-of-match'
                            placeholder='MS Dhoni'
                            onChange={handleChange}
                            value={filter.player_of_match}
                        />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='venue'>venue : </label>
                        <input
                            type='text'
                            name='venue'
                            id='venue'
                            placeholder='Wankhede Stadium'
                            onChange={handleChange}
                            value={filter.venue}
                        />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='umpire'>Umpire : </label>
                        <input
                            type='text'
                            name='umpire'
                            id='umpire'
                            placeholder='CSK'
                            onChange={handleChange}
                            value={filter.umpire}
                        />
                    </div>
                </div>
                {!loadDone && 
                <div class='loader-container'>
					<div className='loader'>
						<Loader />
					</div>
				</div>
                }
                {loadDone&&
                <div className='match-data-cards'>
					{listOfRecords.map(record=>(
                     <MatchCard records={record}/>   
                    ))}
				</div>
                }    
            </div>
        </div>
    );
}
export default Matches;