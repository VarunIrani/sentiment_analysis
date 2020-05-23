import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.1.0";

import Index from "views/Index.js";

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path='/home' render={(props) => <Index {...props} />} />
			<Redirect from='/' to='/home' />
		</Switch>
	</BrowserRouter>,
	document.getElementById("root")
);
