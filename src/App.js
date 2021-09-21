import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NoMatch from "./components/NoMatch";
import Features from "./components/Features";
import Login from "./components/Login";
import { useState, createContext } from "react";

export const UserContext = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState({});

	return (
		<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/home" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/features" component={Features} />
					<Route path="/contact" component={Contact} />
					<Route path="/login" component={Login} />
					<Route path="*" component={NoMatch} />
				</Switch>
			</Router>
		</UserContext.Provider>
	);
}

export default App;
