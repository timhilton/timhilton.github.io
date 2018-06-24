import React, { Component } from 'react';

//react router
import { BrowserRouter as Router, Route } from "react-router-dom"

import './App.css';
import './index.scss'
import NavBar from "./components/NavBar.jsx";
import Home from './components/Home.jsx';
import Portfolio from "./components/Portfolio.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";

class App extends Component {
    render() {
        return (
            <div className="wrap">
                <Router>
					<div>
		                <NavBar />
                        <Route exact path="/" component={Home}/>
						<Route path="/portfolio" component={Portfolio} />
						<Route path="/skills" component={Skills} />
						<Route path="/contact" component={Contact} />
					</div>
				</Router>
            </div>
        );
    }
}

export default App;
