import React from "react";
import { ReactComponent as MatchIcon } from "./icons/match.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Loader } from "./icons/loader.svg";
function MatchCard(props){
    return(
					<div className='match-card'>
						<section className='top-section'>
							<div className='top-left'>
								<div className='match-season'>{props.records.Season}</div>
							</div>
							<div className='match-icon-container'>
								<MatchIcon />
							</div>
							<div className='top-right'>
								<div className='match-date'>
									<FontAwesomeIcon
										icon={["fas", "calendar-alt"]}
									/>{" "}
									{props.records.date}
								</div>
							</div>
						</section>
						<section className='middle-section'>
                                   <div className='match-venue'>
									<FontAwesomeIcon
										icon={["fas", "map-marker-alt"]}
									/>
									{"  "}
									{props.records.venue}
								</div>
							<div className='match-teams'>{props.records.team1} vs {props.records.team2}</div>
							<div className='match-toss'>
								{props.records.toss_winner} won the toss and elected to {props.records.toss_decision}
							</div>
						</section>
						<section className='bottom-section'>
							<div className='match-result'>
								<span>Result: </span>{props.records.toss_winner} won the match
							</div>
							<div className='match-mom'>
								<span>Man of the Match: </span>{props.records.player_of_match}
							</div>
							<div className='match-umpires'>
								<span>Umpires: </span>{props.records.umpire1}, {props.records.umpire2}
								and {props.records.umpire3}
							</div>
						</section>
					</div>
    )
}
export default MatchCard;