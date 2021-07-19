import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NoMatch from "./components/NoMatch";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/home" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
				<Route path="*" component={NoMatch} />
			</Switch>
		</Router>
	);
}

export default App;
