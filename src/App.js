import React, { createContext, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Players from "./components/Players";
import Matches from "./components/Matches";
import AverageSR from "./components/AverageSR";
import Home from "./components/Home";

function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/players' component={Players} />
				<Route exact path='/matches' component={Matches} />
				<Route exactpath='/stats' component={AverageSR} />
			</Switch>
		</div>
	);
}
export default App;
