import React from 'react';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import App from './../App';
import Greatvet from './../greatvet'



class Routes extends React.Component {
	render() {
		return(
			<Router>
				<div> 
					<Switch>
					<Route exact path="/App" component={App} />
					<Route exact path="/Greatvet" component={GreatVet} />
					
					<Route path="*" component={()=>("404 page not found!")} />
					
					
					</Switch>
				</div>
			</Router>
		);
	}
}

export default Routes;