import React ,{useState,useEffect} from "react";
import NavbarIPL from "./NavbarIPL";
import TableSR from "./TableSR";
import RangeSlider from "./RangeSlider";
import axios from "axios";
import { ReactComponent as Loader } from "./icons/loader.svg";
function AverageSR(){
    const [listOfRecords,setlistOfRecords]=useState([]);
    const [loadDone,SetloadDone]=useState(0);
    const [filter,Setfilter]=useState({
        batsman:"",
        total_runs:[0,6000],
        out:[0,500],
        numberofballs:[0,10000],
        average:[0,200],
        strikerate:[0,600]
	});
	function handleTotal_runs(val){
		Setfilter(previousValue=>{
			return{
				...previousValue,
				total_runs:val
			}
		})
	}
	function handleOut(val){
		Setfilter(previousValue=>{
			return {
				...previousValue,
				out:val
			}
		})
	}
	function handleFaced_balls(val){
		Setfilter(previousValue=>{
			return{
				...previousValue,
				numberofballs :val
			}
		})
		console.log(filter);
	}
	function handleAverage(val){
		Setfilter(previousValue=>{
			return {
				...previousValue,
				average: val
			}
		})
	}
	function handleStrike_rate(val){
		Setfilter(previousValue=>{
			return{
				...previousValue,
				strikerate:val
			}
		})
    }
    
    useEffect(async () => {
        SetloadDone(0);
        const response= await axios.post('https://young-lake-96159.herokuapp.com/stats',filter);
        SetloadDone(1);
        setlistOfRecords(response.data);
    },[filter]);

    function handleChange(event){
        const {name,value}=event.target; 
        Setfilter(previousValue=>{
            return {
                ...previousValue,
                [name]:value
            }
        });
    }
    
    return(
        <div className='container'>
			<NavbarIPL />

			<div className='filter-form-container'>
                <div className='filter-form stats-form'>
                    <div className='input-field'>
                        <label htmlFor='player-name'>Batsman: </label>
                        <input
                            type='text'
                            name='batsman'
                            id='player-name'
                            placeholder='Virat Kohli'
                            onChange={handleChange}
                            value={filter.batsman}
                        />
                    </div>
                    <div className='input-field'>
                        <label>Total Runs: </label>
                        <RangeSlider 
						domain={[0, 6000]} 
						step={50} 
						values={[0, 6000]} 
						handleSlide={handleTotal_runs}	
						/>
                    </div>
                    <div className='input-field'>
                        <label>Balls Faced: </label>
                        <RangeSlider 
						domain={[0, 10000]} 
						step={50} 
						values={[0, 10000]} 
						handleSlide={handleFaced_balls}	
						/>
                    </div>
                    <div className='input-field'>
                        <label>Total Out: </label>
                        <RangeSlider 
						domain={[0, 500]} 
						step={10} 
						values={[0, 500]} 
						handleSlide={handleOut}	
						/>
                    </div>
                    <div className='input-field'>
                        <label>Strike Rate: </label>
                        <RangeSlider 
						domain={[0, 600]} 
						step={10} 
						values={[0, 600]} 
						handleSlide={handleStrike_rate}	
						/>
                    </div>
                    <div className='input-field'>
                        <label>Average: </label>
                        <RangeSlider 
						domain={[0, 200]} 
						step={5} 
						values={[0, 200]} 
						handleSlide={handleAverage}
						/>
                    </div>
                </div>
                <div className='filter-data-table'>
                    {!loadDone && 
                        <div class='loader-container'>
					        <div className='loader'> 
                               <Loader />
					        </div>
				        </div>
                    }
                    {loadDone &&
                    <table className='data-table'>
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
                            {/* {console.log(listOfRecords)} */}
                            {listOfRecords.map((record, index) => (
                                <TableSR key={index} records={record} />
                            ))}
                        </tbody>
                    </table>
                    }
                </div>
            </div>
		</div>
    );
}

export default AverageSR;