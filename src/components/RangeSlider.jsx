import React from "react";
import { Slider, Rail, Handles, Tracks } from "react-compound-slider";

function rangeSlider(props) {
	const sliderStyle = {
		// Give the slider some width
		position: "relative",
		width: "85%",
		height: 60,
		border: "none",
		marginLeft: "15px",
	};

	const railStyle = {
		position: "absolute",
		width: "100%",
		height: 10,
		marginTop: 35,
		borderRadius: 5,
		backgroundColor: "#cfedfc", 
	};

	function Handle({ handle: { id, value, percent }, getHandleProps }) {
		return (
			<div
				style={{
					left: `${percent}%`,
					position: "absolute",
					marginLeft: -15,
					marginTop: 27,
					zIndex: 2,
					width: 25,
					height: 25,
					border: 0,
					textAlign: "center",
					cursor: "pointer",
					borderRadius: "50%",
					backgroundColor: "#2C4870", 
					color: "#333",
				}}
				{...getHandleProps(id)}
			>
				<div
					style={{
						fontFamily: "Roboto",
						fontSize: 12,
						marginTop: -25,
						color: "#ffffff",
					}}
				>
					{value}
				</div>
			</div>
		);
	}

	function Track({ source, target, getTrackProps }) {
		return (
			<div
				style={{
					position: "absolute",
					height: 10,
					zIndex: 1,
					marginTop: 35,
					backgroundColor: "#546C91", 
					borderRadius: 5,
					cursor: "pointer",
					left: `${source.percent}%`,
					width: `${target.percent - source.percent}%`,
				}}
				{
					...getTrackProps() 
				}
			/>
		);
	}

	function Tick({ tick, count }) {
		return (
			<div>
				<div
					style={{
						position: "absolute",
						marginTop: 52,
						marginLeft: -0.5,
						width: 1,
						height: 8,
						backgroundColor: "silver",
						left: `${tick.percent}%`,
					}}
				/>
				<div
					style={{
						position: "absolute",
						marginTop: 60,
						fontSize: 10,
						textAlign: "center",
						marginLeft: `${-(100 / count) / 2}%`,
						width: `${100 / count}%`,
						left: `${tick.percent}%`,
					}}
				>
					{tick.value}
				</div>
			</div>
		);
	}

	return (
		<Slider
			rootStyle={sliderStyle}
			domain={props.domain} 
			step={props.step} 
			mode={2}
			values={props.values} 
		    onChange={props.handleSlide}
		>
			<Rail>
				{({ getRailProps }) => (
					<div style={railStyle} {...getRailProps()} />
				)}
			</Rail>
			<Handles>
				{({ handles, getHandleProps }) => (
					<div className='slider-handles'>
						{handles.map((handle) => (
							<Handle
								key={handle.id}
								handle={handle}
								getHandleProps={getHandleProps}
							/>
						))}
					</div>
				)}
			</Handles>
			<Tracks left={false} right={false}>
				{({ tracks, getTrackProps }) => (
					<div className='slider-tracks'>
						{tracks.map(({ id, source, target }) => (
							<Track
								key={id}
								source={source}
								target={target}
								getTrackProps={getTrackProps}
							/>
						))}
					</div>
				)}
			</Tracks>
		</Slider>
	);
}

export default rangeSlider;
