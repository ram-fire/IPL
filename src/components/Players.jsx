import React, { useState, useEffect } from "react";
import NavbarIPL from "./NavbarIPL";
import TableOfplayers from "./TableOfplayers";
import { ReactComponent as Loader } from "./icons/loader.svg";
import axios from "axios";
function Players() {

	const [listOfRecords, setlistOfRecords] = useState([]);
	const [loadDone,SetloadDone]=useState(0);
	const [filter, Setfilter] = useState({
		Player_Name: "",
		Batting_Hand: "",
		Bowling_Skill: "",
		Country: "",
		DOB: "",
	});

	useEffect(async () => {
		SetloadDone(0);	
		const response= await axios.post('https://young-lake-96159.herokuapp.com/players',filter);
		setlistOfRecords(response.data);
		SetloadDone(1);
	},[filter]);

	function handleChange(event) {
		const { name, value } = event.target;
		Setfilter((previousValue) => {
			return {
				...previousValue,
				[name]: value,
			};
		});
	}

	return (
		<div className='container'>
			<NavbarIPL />

			<div className='filter-form-container'>
				<div className='filter-form player-form'>
					<div className='input-field'>
						<label htmlFor='player-name'>Name: </label>
						<input
							type='text'
							name='Player_Name'
							id='player-name'
							placeholder='Virat Kohli'
							onChange={handleChange}
							value={filter.Player_Name}
						/>
					</div>
					<div className='input-field'>
						<label htmlFor='Batting_Hand'>Batting Hand: </label>
						<select name='Batting_Hand' id='Batting_Hand' value={filter.Batting_Hand} onChange={handleChange}>
						    <option value='both'>Both</option>
							<option value='Left_Hand'>Left Hand</option>
							<option value='Right_Hand'>Right Hand</option>
						</select>
					</div>
					<div className='input-field'>
						<label htmlFor='Bowling_Skill'>Bowling Skill: </label>
						<select name='Bowling_Skill' onChange={handleChange} value={filter.Bowling_Skill} id='Bowling_Skill'>
						<option value='all'>All</option>
							<option value='Right-arm medium'>
								Right-arm medium
							</option>
							<option value='Right-arm offbreak'>
								Right-arm offbreak
							</option>
							<option value='Legbreak googly'>
								Legbreak googly
							</option>
							<option value='Right-arm fast-medium'>
								Right-arm fast-medium
							</option>
							<option value='Legbreak'>Legbreak</option>
							<option value='Left-arm medium-fast'>
								Left-arm medium-fast
							</option>
							<option value='Slow left-arm orthodox'>
								Slow left-arm orthodox
							</option>
							<option value='Left-arm medium'>
								Left-arm medium
							</option>
						</select>
					</div>
					{/* <div className='input-field'>
						<label htmlFor='DOB'>Date Of Birth: </label>
						<input
							type='date'
							id='dob'
							name='DOB'
							placeholder='11/09/2002'
							onChange={handleChange}
							value={filter.DOB}
						/>
					</div> */}
					<div className='input-field'>
						<label htmlFor='Country'>Country: </label>
						<input
							type='text'
							name='Country'
							id='Country'
							placeholder='India'
							onChange={handleChange}
							value={filter.Country}
						/>
					</div>
					{/* <div className="apply-button">
                        <button onClick={onSubmitFilter}>
							Apply
						</button>
					</div> */}
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
								<th>Batting Hand</th>
								<th>Bowling Skill</th>
								<th>DOB</th>
								<th>Country</th>
							</tr>
						</thead>
						<tbody>
							{/* {console.log(listOfRecords)} */}
							{listOfRecords.map((record, index) => (
								<TableOfplayers key={index} records={record} />
							))}
						</tbody>
					</table>
					}
				</div>
			</div>
		</div>
	);
}

export default Players;
